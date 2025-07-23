import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Currency from './components/Currency'
import { apiKey } from './dataAPI'

const base_url = `https://api.freecurrencyapi.com/v1/latest?apikey=`;

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);


  const getCurrency = async () => {
    const response = (await axios.get(`${base_url}${apiKey}`)).data.data;
    const currencyNames = Object.keys(response);
    setCurrencies(currencyNames);
    setRate(response[toCurrency]);
  }

  const getCurrenyIfChanged = async () => {
    const response = (await axios.get(`${base_url}${apiKey}&base_currency=${fromCurrency}`)).data.data;
    setRate(response[toCurrency]);
  }

  useEffect(() => {
    getCurrency();
  }, [])

  useEffect(() => {
    getCurrenyIfChanged();
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    setConvertedAmount(rate * amount);
  }, [rate, amount]);


  return (
    <>
      <Currency
        currencies={currencies}
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        convertedAmount={convertedAmount}
      />
    </>
  )
}

export default App
