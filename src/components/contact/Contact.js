import React from 'react'
import {contact} from "../../data/data"
import "./Contact.modules.css"
import SocialMedia from "../socialMedia/SocialMedia"
function Contact() {
    return (
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contact.heading}</h1>
                    <p className="subTitle contact-subtitle">{contact.subheading}</p>

                    <div className="contact-text-div">
                        <p className="contact-detail">{`Call me at: ${contact.call}`}</p>
                        <p className="contact-detail-email">{`Email: ${contact.mail}`}</p>
                        <br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    <img alt="My Pic" src={contact.image}></img>
                </div>
            </div>
        </div>
    )
}

export default Contact
