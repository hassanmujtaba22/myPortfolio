import React from 'react'
import { footer } from '../../data/data'
import "./Footer.modules.css"
function Footer() {
    return (
        <div className="footer-div">
            <p className="footer-text">{footer.madewith}</p>
        </div>
    )
}

export default Footer
