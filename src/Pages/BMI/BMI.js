import React, { useState } from "react";
import style from './BMI.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, id, handleChange, name, type, placeholder }) => (
    <>
        <label className={`${style.label}`} htmlFor={id}>{label}</label>
        <input onInput={(e) => e.target.value = e.target.value.slice(0, 3)} className={`${style.input}`} type={type || "number"} id={id} name={name || id} placeholder={placeholder} onChange={(e) => { handleChange(e.target.value) }}></input>
        <p className={`${style.formError}`}>{name} cannot be empty</p>
        <br />
    </>
);

// TODO: Validation

function BMI() {
    const [page, setPage] = useState(0);
    const [bmiScore, setBmiScore] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    const [bmiDesc, setBmiDesc] = useState(0)

    const clearState = () => {
        setHeight('')
        setWeight('')
        setAge('')
    }

    function removeSelected() {
        const selectedBox = document.querySelectorAll('#head')
        selectedBox.forEach(item => {
            item.classList.remove(`${style.activeBox}`)
        })
    }

    const calculateBmi = () => {
        let score = (weight / ((height * 2) / 100))
        setBmiScore(score)
        if (score <= 18.5) {
            setBmiDesc('Underweight')
        } else if (score > 18.5 && score <= 24.9) {
            setBmiDesc('Healthy')
        } else if (score > 24.9 && score <= 29.9) {
            setBmiDesc('Overweight')
        } else if (score > 30 && score <= 39.9) {
            setBmiDesc('Obese')
        } else {
            setBmiDesc('')
        }
    }


    const handleToggle = (e) => {
        if (!e.currentTarget.className.includes("activeBox")) {
            removeSelected()
            e.target.classList.add(`${style.activeBox}`)
        } else {
            e.target.classList.remove(`${style.activeBox}`)
        }
    };



    const PageDisplay = () => {
        if (page === 0) {
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
                            <Input name="weight" handleChange={setWeight} placeholder='Weight' label='Your weight (kg)'>{weight}</Input>
                            <Input name="height" handleChange={setHeight} placeholder='Height' label='Your height (cm)'>{height}</Input>
                            <Input name="age" handleChange={setAge} placeholder='Age' label='Your age'>{age}</Input>

                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className={`${style.content}`}>
                    <div className={`${style.imgResult}`}></div>
                    <div className={`${style.descriptions}`}>
                        <p className={`${style.bmiScoreDesc}`}>Your BMI is <span className={`${style.bmiScoreColor}`}>{(bmiScore).toFixed(2)}</span>, indication your weight is in the <span className={`${style.bmiScoreColor}`}>{bmiDesc}</span> category for adults of your height</p>
                        <p className={`${style.descriptionBottom}`}>Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
                    </div>
                </div>
            )
        }
    };




    const checkPage = (e) => {
        if (page === 0) {
            return (
                <button className={`${style.button}`}
                    disabled={page === 1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                        calculateBmi();
                    }}>Calculate</button>
            )
        } else {
            return (
                <button className={`${style.button}`} disabled={page === 0} onClick={() => {
                    setPage((currPage) => currPage - 1);
                    clearState()
                }}>Back</button>
            )
        }
    }


    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.box}`}>
                <div className={`${style.img}`}></div>
                <div className={`${style.topSection}`}>
                    <h1 className={`${style.title}`}>{(page === 0 ? 'BMI Calculator' : 'Result')}</h1>
                </div>


                <div className="body">{PageDisplay()}</div>
                <div>{checkPage()}</div>

            </div>
        </div>
    )
}


export default BMI
