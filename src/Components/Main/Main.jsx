import { useEffect, useState } from "react"
import CurrencyInput from "../CurrencyInput/CurrencyInput";


export default function Main({ rates }) {
    const [leftSideValue, setLeftSideValue] = useState(1);
    const [rightSideValue, setRightSideValue] = useState(1);
    const [leftSideCurrency, setLeftSideCurrency] = useState('UAH');
    const [rightSideCurrency, setRightSideCurrency] = useState('UAH');
    const [countRates, setCountRates] = useState([]);

    useEffect(() => {
        setCountRates(rates);
    }, [rates]);
    

    // useEffect(() => {
    //     if (!!rates) {
    //     function init() {
    //         setLeftSideValue(1);
    //     }
    //     init();
    //     }
    // }, [rates]);

      function format(number) {
    return number.toFixed(2);
    }

  function handleLeftSideValueChange(leftSideValue) {
    setRightSideValue(format(leftSideValue * rates[leftSideCurrency] / rates[rightSideCurrency]));
    setLeftSideValue(leftSideValue);
  }

  function handleLeftSideCurrencyChange(leftSideCurrency) {
    setRightSideValue(format(leftSideValue * rates[leftSideCurrency] / rates[rightSideCurrency]));
    setLeftSideCurrency(leftSideCurrency);
  }

  function handleRightSideValueChange(rightSideValue) {
    setLeftSideValue(format(rightSideValue * rates[rightSideCurrency] / rates[leftSideCurrency]));
    setRightSideValue(rightSideValue);
  }

  function handleRightSideCurrencyChange(rightSideCurrency) {
    setLeftSideValue(format(rightSideValue * rates[rightSideCurrency] / rates[leftSideCurrency]));
    setRightSideCurrency(rightSideCurrency);
  }

    return (
        <div>
            <h2>Enter currency and amount to convert</h2>
            <CurrencyInput
                onValueChange={handleLeftSideValueChange}
                onCurrencyChange={handleLeftSideCurrencyChange}
                currencies={Object.keys(countRates)}
                value={leftSideValue}
                selectedCurrency={leftSideCurrency} />
            <CurrencyInput
                onValueChange={handleRightSideValueChange}
                onCurrencyChange={handleRightSideCurrencyChange}
                currencies={Object.keys(countRates)}
                value={rightSideValue}
                selectedCurrency={rightSideCurrency} />
        </div>
    )
};