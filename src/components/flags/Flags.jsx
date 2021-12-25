import React from 'react'
import "./flags.css"
import {Star,KeyboardArrowDown} from '@mui/icons-material';
import HeroImg from "../../assets/Feather-flags-SQS-10024.jpg"


const Flags = () => {
    return (
        <div className="flags">
            <div className="container">
                <div className="content">
                    <div className="content-top">
                        <h2>Custom Feather Flags</h2>
                        <p>100% Customizable - Double or Single Sided - Indoor/Outdoor</p>
                        <div className="star">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <KeyboardArrowDown/>
                            <p>338 reviews</p>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="flags-img">
                            <img src={HeroImg} alt="" />
                        </div>
                        <div className="form-layout">
                            <p>Beautiful feather flags printed using a full color dye-sublimation digital printing process on 4 oz polyester fabric. Comes in four different sizes. Choose from four different bases depending on your intended use.</p>
                            <p>Read More</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flags
