import React from 'react'
/* import {Link} from 'react-router-dom' */
import "./pickup.css"
import img21 from "./images/21.png";
import img22 from "./images/22.png";
import img23 from "./images/23.png";
import img24 from "./images/24.png";
import img25 from "./images/25.png";


const Pickup = () => {
    const image=[img21,img22,img23,img24,img25]
    return (
        <div className="pickup">
           {/*  <Link className="link" to="/pickup">Pickup & Drive Thru</Link> */}
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

export default Pickup
