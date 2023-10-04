import React, { useState } from "react";
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import {MenuItems} from './MenuItems'
import {Link} from "react-router-dom"

const Navbar =() => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <nav className="navbarItems">
            <h1 className="navbarLogo"> WebTech</h1>
            <div className="menuIcons" onClick={handleClick}>
                <i>{click ? (<FaTimes/>) : (<FaBars/>)}</i>
            </div>
            <ul className={click ? "navMenu active" : "navMenu"}>
                {
                MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}><i>{item.icon}</i>{item.title}</Link>
                    </li>
                    )
                })
                }
                <button>Sign Up</button>
            </ul>
        </nav>
    )


}
export default Navbar