import React from 'react'
/* import {Link} from 'react-router-dom' */
import "./sale.css"
import img16 from "./images/16.png";
import img17 from "./images/17.png";
import img18 from "./images/18.png";
import img19 from "./images/19.png";
import img20 from "./images/20.png";


const Sale = () => {
    const image=[img16,img17,img18,img19,img20]
    return (
        <div className="sale">
            {/* <Link className="link" to="/sale">Sale</Link> */}
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

export default Sale
