import React, { useState } from 'react'
import style from './BillSplitter.module.css'

const tips = [5, 10, 15, 25]



const Input = ({ label, id, handleChange, name, type, placeholder }) => (
  <>
    <label className={`${style.label}`} htmlFor={id}>{label}</label>
    <input className={`${style.input}`} type={type || "number"} id={id} name={name || id} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)}></input>
    <br />
  </>
);

function BillSplitter() {
  const [billAmount, setBillAmount] = useState(0);
  const [personAmount, setPersonAmount] = useState(0);
  const [perCost, setPerCost] = useState(0);


  const calculatePerPerson = (tip) => {
    if (personAmount > 0) {
      setPerCost(((1 + 0.01 * tip) * (billAmount)) / personAmount);
    }
  }


  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.box}`}>
        <div className={`${style.topSection}`}>
          <h2 className={`${style.title}`}>Bill Splitter</h2>
          <p className={`${style.personBillAmount}`}>Person Bill Amount</p>
          <p className={`${style.totalPersonAmount}`} >$ {(perCost).toFixed(2)}</p>
        </div>
        <div className={`${style.bottom}`}>

          <Input handleChange={setBillAmount} placeholder='Amount of bill' label="Bill value">{billAmount}</Input>

          <Input handleChange={setPersonAmount} placeholder='Number of people' label="Number of people">{personAmount}</Input>

          <div className={`${style.tipBox}`}>
            <p>Select tip</p>
            {tips.map((tip) => {
              return <button className={`${style.tipButton}`} onClick={() => calculatePerPerson(tip)} key={tip}>{tip} %</button>
            })}
          </div>
        </div>
      </div>
    </div>


  )
}


export default BillSplitter
