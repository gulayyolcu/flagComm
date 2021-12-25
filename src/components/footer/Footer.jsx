import React from 'react'
import "./footer.css"
import visaImg from "./images/visa.png"
import {LinkedIn,Facebook,Twitter,Pinterest,Instagram} from '@mui/icons-material';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="visaImg">
                    <img src={visaImg} alt="" />
                </div>
                <div className="columns">
                    <div className="column">
                        <h6>Company Name</h6>
                        <ul>
                            <li>About</li>
                            <li>News</li>
                            <li>Policies</li>
                            <li>Our Advantages</li>
                            <li>Customer Reviews</li>
                            <li>Editorial Team</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h6>Resources</h6>
                        <ul>
                            <li>FAQ</li>
                            <li>Design Services</li>
                            <li>Giving Back</li>
                            <li>Sample Pack</li>
                            <li>Printable</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h6>Support</h6>
                        <ul>
                            <li>Contact Us</li>
                            <li>How Tos</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h6>Shop</h6>
                        <ul>
                            <li>Branded</li>
                            <li>Templates</li>
                            <li>Price Calculator</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h6>Comminity</h6>
                        <div className="muiIcons">
                            <LinkedIn/><Facebook/><Twitter/><Pinterest/><Instagram/>
                        </div>
                        <div className="prgf">
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
