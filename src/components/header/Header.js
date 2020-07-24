import React from 'react'
import "./Header.modules.css"
import AOS from "aos"


function Header() {
    
    AOS.init();
    return (
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-easing="linear">
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
        </div>
    )
}

export default Header
