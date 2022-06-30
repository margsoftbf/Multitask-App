import React from "react";
import style from './BMI.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';


function Calculator() {
  return (
    <>
      <div className={`${style.img}`}></div>
      <div className={`${style.topSection}`}>
        <h1 className={`${style.title}`}>BMI Calculator</h1>
      </div>
      <div></div>
      <div className={`${style.middleSection}`}>
        <h3 className={`${style.formTitle}`}>Choose your gender</h3>
        <div className={`${style.genders}`}>
          <div className={`${style.genderBox} ${style.activeBox}`}>
            <FontAwesomeIcon icon={faCircleCheck} className={`${style.icon}`} />
            <FontAwesomeIcon icon={faMars} className={`${style.genderIcon}`} />
            <h3 className={`${style.genderBoxTitle}`}>Male</h3>
          </div>
          <div className={`${style.genderBox}`}>
            <FontAwesomeIcon icon={faCircleCheck} className={`${style.icon}`} />
            <FontAwesomeIcon icon={faVenus} className={`${style.genderIcon}`} />
            <h3 className={`${style.genderBoxTitle}`}>Female</h3>
          </div>
        </div>
      </div>
    </>
  )
}


export default Calculator
