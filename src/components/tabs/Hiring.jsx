import React from 'react'
/* import {Link} from 'react-router-dom' */
import "./hiring.css"
import img26 from "./images/26.png";
import img27 from "./images/27.png";
import img28 from "./images/28.png";
import img29 from "./images/29.png";
import img30 from "./images/30.png";


const Hiring = () => {

    const image=[img26,img27,img28,img29,img30]
    return (
        <div className="hiring">
            {/* <Link className="link" to="/hiring">Now Hiring</Link> */}
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

export default Hiring
