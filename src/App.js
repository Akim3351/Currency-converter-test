import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Wrapper from './Components/Wrapper/Wrapper';
import fetchCurrencyRate from './services/api/fetchCurrencyRate';

function App() {
  const [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    async function getCurrencyRate() {
      try {
        const rates = await fetchCurrencyRate();
        setExchangeRate([...rates]);
      } catch (error) {
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
    exchangeRate.length !== 0 ?
        (<div className="App">
          <Wrapper>
            <Header rates={exchangeRate} />
            <Main rates={tableRates()} />
          </Wrapper>
        </div>)
        : <h1>Loading exchange rates, please wait...</h1>
    
  );
}

export default App;
