import React from 'react'
import Accordion from '../accordion/Accordion'
import Slider from '../slider/Slider'
import "./hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
         
                    <div className="sliderSection">
                        <Slider/>
                    </div>
                    <div className="accordionSection">
                        <Accordion/>
                    </div>
           
                
            </div>
        </div>
    )
}

export default Hero
