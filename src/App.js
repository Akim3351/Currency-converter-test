import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Wrapper from './Components/Wrapper/Wrapper';
import fetchCurrencyRate from './services/api/fetchCurrencyRate';

function App() {
  const [exchangeRate, setExchangeRate] = useState([]);
  const [status, setStatus] = useState('pending');

  const IS_PENDING = status === 'pending';
  const IS_FULLFILLED = status === 'fullfilled';
  const IS_REJECTED = status === 'rejected';
  
  useEffect(() => {
    async function getCurrencyRate() {
      try {
        const rates = await fetchCurrencyRate();
        setExchangeRate([...rates]);
        setStatus('fullfilled');
      } catch (error) {
        setStatus('rejected');
        console.log(error.message);
      }
    };
    getCurrencyRate();
  }, []);

  const tableRates = () => {
    const tableRates = { 'UAH': 1 };
    // eslint-disable-next-line
    exchangeRate.map(rate => {
      const midRates = (Number(rate.normalizedBuyValue) + Number(rate.normalizedSaleValue)) / 2;
      tableRates[rate.ccy] = midRates;
    });
    return tableRates;
  };

  return (
    <div className="App">

    {IS_PENDING && 
        <Wrapper>
          <h1>Loading exchange rates, please wait...</h1>
        </Wrapper>}

    {IS_FULLFILLED && 

        <Wrapper>
          <>
            <Header rates={[...exchangeRate]} />
            <Main rates={tableRates()} />
          </>
        </Wrapper>}
    
    {IS_REJECTED &&
          <Wrapper>
            <h1>Oops, something gone wrong... Try again or call admin for help</h1>
          </Wrapper>}
    
        
    </div>
  );
}

export default App;
