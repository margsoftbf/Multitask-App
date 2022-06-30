import React, { useState } from "react";
import style from './BMI.module.css';
import Calculator from './Calculator'
import Result from './Result'


function BMI() {
    // const [toggle, setToggle] = useState(true)

    // const toggler = () => {
    //     toggle ? setToggle(false) : setToggle(true)
    // }

    const [page, setPage] = useState(0);

    
    const checkPage = () => {
        if (page === 0) {
            return (
                <button className={`${style.button}`}
                    disabled={page === 1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}>Calculate</button>
            )
        } else {
            return (
                <button className={`${style.button}`} disabled={page === 0} onClick={() => {
                    setPage((currPage) => currPage - 1);
                }}>Back</button>
            )
        }
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <Calculator />;
        } else {
            return <Result />;
        }
    };

    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.box}`}>
                <div className="body">{PageDisplay()}</div>
                <div>{checkPage()}</div>
            </div>
        </div>
    )
}



export default BMI
