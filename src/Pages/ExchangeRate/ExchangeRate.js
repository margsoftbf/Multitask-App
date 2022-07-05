import React, { useEffect, useState } from 'react'
import style from './ExchangeRate.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import CurrencyList from './components/CurrencyList';


const BASE_URL = 'https://api.exchangerate.host/latest'


// const Input = ({ type }) => (
//     <>
//         <div className={`${style.inputBox}`}>
//             <input className={`${style.input}`} type={type || "number"}></input>
//             <select className={`${style.select}`}>
//                 <option></option>
//             </select>
//         </div>
//     </>
// );


function ExchangeRate() {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [firstCurrency, setFirstCurrency] = useState()
    const [secondCurrency, setSecondCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    let toAmount, fromAmount

    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = (amount * exchangeRate).toFixed(2)
    } else {
        toAmount = amount
        fromAmount = (amount / exchangeRate).toFixed(2)
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFirstCurrency(data.base)
                setSecondCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (firstCurrency != null && secondCurrency != null) {
            fetch(`${BASE_URL}?base=${firstCurrency}&symbols=${secondCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[secondCurrency]))
        }
    }, [firstCurrency, secondCurrency])

    function handleClick(e) {
        setSecondCurrency(firstCurrency)
        setFirstCurrency(secondCurrency)
        setAmount(fromAmount)
        setAmountInFromCurrency(toAmount)
    }

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <>
            <div className={`${style.wrapper}`}>
                <div className={`${style.box}`}>
                    <div className={`${style.img}`}></div>
                    <div className={`${style.topSection}`}>
                        <h1 className={`${style.title}`}>Currency Converter</h1>
                    </div>
                    <div className={`${style.middleSection}`}>
                        <CurrencyList
                            currencyOptions={currencyOptions}
                            selectedCurrency={firstCurrency}
                            onChangeCurrency={e => setFirstCurrency(e.target.value)}
                            onChangeAmount={handleFromAmountChange}
                            amount={fromAmount}
                        />
                        <button onClick={handleClick} className={`${style.swap}`}>
                            <FontAwesomeIcon icon={faRetweet} className={`${style.genderIcon}`} />
                        </button>
                        <CurrencyList
                            currencyOptions={currencyOptions}
                            selectedCurrency={secondCurrency}
                            onChangeCurrency={e => setSecondCurrency(e.target.value)}
                            onChangeAmount={handleToAmountChange}
                            amount={toAmount}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}



export default ExchangeRate
