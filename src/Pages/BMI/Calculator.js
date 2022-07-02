import React, { useState } from "react";
import style from './Calculator.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, id, handleChange, name, type, placeholder }) => (
  <>
    <label className={`${style.label}`} htmlFor={id}>{label}</label>
    <input className={`${style.input}`} type={type || "number"} id={id} name={name || id} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)}></input>
    <br />
  </>
);

function Calculator() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)

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
      <div className={`${style.content}`}>
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
        <div className={`${style.bottomSection}`}>
          <Input handleChange={setWeight} placeholder='Weight' label='Your weight (kg)'>{weight}</Input>
          <Input handleChange={setHeight} placeholder='Height' label='Your height (cm)'>{height}</Input>
          <Input handleChange={setAge} placeholder='Age' label='Your age'>{age}</Input>
        </div>
      </div>
    </>
  )
}


export default Calculator

