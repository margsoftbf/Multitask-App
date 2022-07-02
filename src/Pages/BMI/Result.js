import React, { useState } from 'react'
import style from './Result.module.css'


function Result() {
  const [bmiScore, setBmiScore] = useState(0)
  const [bmiDesc, setBmiDesc] = useState('')


  return (
    <div className={`${style.content}`}>
      <div className={`${style.img}`}></div>
      <div className={`${style.descriptions}`}>
        <p className={`${style.bmiScoreDesc}`}>Your BMI is <span className={`${style.bmiScoreNumber}`}>{bmiScore}</span>, indication your weight is in the <span className={`${style.bmiScoreDesc}`}>{bmiDesc}</span> category for adults of your height</p>
        <p className={`${style.descriptionBottom}`}>Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
      </div>
    </div>
  )
}



export default Result
