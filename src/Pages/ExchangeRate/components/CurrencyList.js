import React from 'react'
import style from '../ExchangeRate.module.css'

export default function CurrencyList(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return (
        <>
            <div className={`${style.inputBox}`}>
                <input className={`${style.input}`} type="number" value={amount} onChange={onChangeAmount}></input>
                <select className={`${style.select}`} value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map((option, id) => (
                        <option key={id} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
