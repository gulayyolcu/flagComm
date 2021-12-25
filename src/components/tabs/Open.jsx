import React from 'react'
/* import {Link } from "react-router-dom" */
import "./open.css"
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";


const Open = () => {
    const image=[img6,img7,img8,img9,img10]
    return (
        <div className="open">
            {/* <Link className="link" to="/weareopen">We Are Open</Link> */}
            <div className="container">
            <div className="imageContainer">
              
              {
              image.map((i)=>{
                  return(
                      <div className="imgFlag">

                     
                      <img src={i} alt=""/>
                      </div>
                  )
              })
          }
    </div>
    
            </div>
        </div>
    )
}

export default Open
