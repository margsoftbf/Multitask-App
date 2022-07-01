import React from "react";
import style from './BMI.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';


function Calculator() {

  function removeSelected() {
    const selectedBox = document.querySelectorAll('#head')
    console.log(selectedBox.classList)
    selectedBox.forEach(item => {
      item.classList.remove(`${style.activeBox}`)
    })
  }

  const handleToggle = (e) => {
    if (!e.currentTarget.className.includes("activeBox")) {
      removeSelected()
      e.target.classList.add(`${style.activeBox}`)
    } else {
      e.target.classList.remove(`${style.activeBox}`)
    }
  };
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
          <div id="head" onClick={handleToggle} className={`${style.genderBox}`}>
            <FontAwesomeIcon icon={faMars} className={`${style.genderIcon}`} />
            <h3 className={`${style.genderBoxTitle}`}>Male</h3>
          </div>
          <div id="head" onClick={handleToggle} className={`${style.genderBox}`}>

            <FontAwesomeIcon icon={faVenus} className={`${style.genderIcon}`} />
            <h3 className={`${style.genderBoxTitle}`}>Female</h3>
          </div>
        </div>
      </div>
    </>
  )
}


export default Calculator
