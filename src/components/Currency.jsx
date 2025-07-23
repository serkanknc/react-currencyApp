import React from 'react'
import '../css/currency.css'


function Currency({
    currencies,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount
}) {



    return (
        <div className="currency-app">
            <h1>Döviz Çevirici</h1>

            <div className="converter-form">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Miktar" className="amount-input" />

                <div className="currency-select">
                    <select className="from-currency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {currencies.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                    <span className="arrow">→</span>
                    <select className="to-currency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {currencies.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                </div>

                {/* <button className="convert-btn">Çevir</button> */}
            </div>

            <div className="result">

                {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}

            </div>
        </div>

    )
}

export default Currency