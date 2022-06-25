import React from 'react'
import style from './Buttons.module.css'
import { NavLink } from 'react-router-dom';




function Buttons() {

    const navLinkStyles = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#0aaf6a' : '#51557e',
            boxShadow: isActive ? '1px 1px 3px #0aaf6a' : '1px 1px 3px #51557e'
        }
    }

    return (
        <div className={`${style.container}`}>
            <h1 className={`${style.title}`}>Multitask App</h1>
            <ul className={`${style.menu}`}>
                <li className={`${style.menuItemek}`}>
                    <NavLink className='nav-link' style={navLinkStyles} to='/bill-splitter'>Bill Splitter</NavLink></li>
                <li className={`${style.menuItemek}`}>
                    <NavLink style={navLinkStyles} to='/bmi'>BMI Calculator</NavLink></li>
                <li className={`${style.menuItemek}`}>
                    <NavLink style={navLinkStyles} to='/calculator'>Calculator</NavLink></li>
                <li className={`${style.menuItemek}`}>
                    <NavLink style={navLinkStyles} to='/exchange-rate'>Exchange Rate App</NavLink></li>
            </ul>
        </div>
    )


}


export default Buttons
