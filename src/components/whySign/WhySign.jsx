import React from 'react'
import "./whySign.css"
import img1  from "./image/1.png"
import img2  from "./image/2.png"
import img3  from "./image/3.png"
import img4  from "./image/4.png"

const WhySign = () => {
   
    return (
        <div className="whySign">
            <div className="container">
                <div className="header">
                <h1>Why Signs.com?</h1>
                </div>
                <div className="icons">
                    <div className="icon">
                        <img src={img1} alt=""/>
                        <h3>Free Design Services</h3>
                        <p>Le us help you design the perfect feather flag.</p>
                    </div>
                    <div className="icon">
                        <img src={img2} alt=""/>
                        <h3>Fast Production</h3>
                        <p>Order Today. Ships Within Two Days.</p>
                    </div>
                    <div className="icon">
                        <img src={img3} alt=""/>
                        <h3>Award Winning Customer Service</h3>
                        <p>The easiest and fastest sign experience combined with the best service.</p>
                    </div>
                    <div className="icon">
                        <img src={img4} alt=""/>
                        <h3>100% Satisfaction</h3>
                        <p>You'll love it! We guarantee it!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySign
