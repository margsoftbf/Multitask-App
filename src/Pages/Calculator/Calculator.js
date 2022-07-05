import React, { useState } from 'react'
import style from './Calculator.module.css'

function Calculator() {

  const [result, setResult] = useState('')
  const handleClick = e => {
    setResult(result.concat(e.target.name));
  }


  const clearInput = () => {
    setResult("");
  };


  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const calcTheResult = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("Wrong value");
    }
  };



  return (
    <>
      <div className={`${style.wrapper}`}>
        <div className={`${style.box}`}>
          <input type="text" className={`${style.inputResult}`}
            value={result} onChange={e => setResult(e.target.name)} />
          <div className={`${style.calculatorButtons}`}>
            <button onClick={clearInput} className={`${style.clearButton} ${style.functionButton}`}>
              C
            </button>
            <button onClick={backSpace} className={`${style.calculatorButton} ${style.functionButton}`}>
              &larr;
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} onClick={handleClick} name="/" >
              &divide;
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="7" >
              7
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="8" >
              8
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="6" >
              9
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} onClick={handleClick} name="*" >
              x
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="4">
              4
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="5">
              5
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="6">
              6
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} onClick={handleClick} name="-">
              -
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="1">
              1
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="2">
              2
            </button>
            <button className={`${style.calculatorButton}`} onClick={handleClick} name="3">
              3
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} onClick={handleClick} name="+">
              +
            </button>
            <button className={`${style.calculatorButton} ${style.calculatorZero}`} onClick={handleClick} name="0">
              0
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} onClick={handleClick} name=".">
              .
            </button>
            <button className={`${style.calculatorButton} ${style.functionButton}`} name="=" onClick={calcTheResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  )
}



export default Calculator
