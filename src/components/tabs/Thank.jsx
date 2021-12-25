import React from 'react'
/* import {Link} from 'react-router-dom' */
import "./thank.css"
import img11 from "./images/11.png";
import img12 from "./images/12.png";
import img13 from "./images/13.png";
import img14 from "./images/14.png";
import img15 from "./images/15.png";


const Thank = () => {
    const image=[img11,img12,img13,img14,img15]
    return (
        <div className="thank">
            {/* <Link className="link" to="/thankyou">Thank You</Link> */}
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

export default Thank
