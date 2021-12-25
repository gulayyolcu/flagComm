import React from 'react'
import "./blue.css"
import devImg from "./image/developer.jpg"

const Blue = () => {
    return (
        <div className="blue">
            
                <div className="hugeImg">
                    <img src={devImg} alt="" />
                </div>
                <div className="text">
                    <small>Need help with your custom feather flag? We offer <span>FREE DESIGN SERVICES!</span></small>
                    <button>
                            Get Started
                        </button>
                </div>
         
        </div>
    )
}

export default Blue
