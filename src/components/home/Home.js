import React from 'react'
import emoji from "react-easy-emoji";
import { greeting } from "../../data/data.js"
import "./Home.modules.css"
import Button from "../button/Button"
import SocialMedia from "../socialMedia/SocialMedia"
import AOS from "aos"


function Home() {
    AOS.init();
    return (

            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div data-aos="fade-right" data-aos-duration="3000">
                    <div className="greeting-text-div">
                        <div>
                            <h2 className="greet-hello">
                                Hello!
                                <span className="wave-emoji">{emoji("👋")}</span>
                            </h2>
                            <h1 className="greeting-text">
                                {greeting.title}
                            </h1>
                            <p className="greeting-text-p subTitle">
                                {greeting.profession}    
                                {greeting.subTitle}
                            </p>
                            <SocialMedia />
                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000">
                    <div className="greeting-image-div">
                        <img src="./images/homeicon.svg" alt="greetingIcon" />
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
