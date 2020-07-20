import React from 'react'
import "./Header.modules.css"
function Header() {
    return (
        <>
            <header className="header">
                <a href="/">
                    <img className="logo" src="/images/logo.png" alt="Logo" />
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#achievements">Achievements</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    {/* <li>
                        <a href="#services">Services</a>
                    </li> */}
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header
