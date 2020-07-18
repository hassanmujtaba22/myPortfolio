import React from 'react'
import emoji from "react-easy-emoji";
import { greeting } from "../../data/data.js"
import "./Home.modules.css"

function Home() {
    return (
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
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
                            {/* <SocialMedia /> */}
                            <div className="button-greeting-div">
                                {/* <Button text="Contact me" href="#contact" /> */}
                                {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {/* <img alt="saad sitting on table" src={require("../../assets/images/manOnTable.svg")}></img> */}
                        <img src="./images/homeicon.svg" alt="greetingIcon"/>
                    </div>
                </div>
            </div>
    )
}

export default Home
