import InputBox from "./components/InputBox";
import { useCallback, useState, useEffect } from "react";
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);

  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const currencyExchangeData = useCurrencyInfo(fromCurrency);

  const allCurrencyNames = Object.keys(currencyExchangeData);

  const convertCurrency = useCallback(() => {
    const rate = currencyExchangeData[toCurrency];
    function floorToThirdDecimalPlace(num) {
      return Math.floor(num * 1000) / 1000;
    }
    
    // Example usage:
    
    if (rate) {
      setOutputAmount(floorToThirdDecimalPlace(inputAmount * rate));
    }
  }, [inputAmount, toCurrency, currencyExchangeData]);

  const swap = () => {
    setInputAmount(outputAmount);
    setOutputAmount(inputAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  useEffect(() => {
    convertCurrency();
  }, [convertCurrency]);

  const BackgroundImage = 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="w-full h-screen bg-black bg-cover bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url('${BackgroundImage}')`, }}>
      <div id="converterContainer" className="bg-white p-10 rounded-lg ">
        <InputBox label={'from'} readOnly={false} allNames={allCurrencyNames} currency={fromCurrency} set={setFromCurrency} amount={inputAmount} setAmount={setInputAmount} ph={'0'}></InputBox>
        <div className="flex justify-center"><button className="bg-blue-600 pb-1 px-2 my-3 rounded-md text-white " onClick={swap}>swap</button></div>
        <InputBox label={'to'} readOnly={true} allNames={allCurrencyNames} currency={toCurrency} set={setToCurrency} amount={outputAmount}></InputBox>
      </div>
    </div>
  );
}

export default App;
