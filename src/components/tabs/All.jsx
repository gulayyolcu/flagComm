import React from 'react'
import "./all.css"
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";
import img12 from "./images/12.png";
import img13 from "./images/13.png";
import img14 from "./images/14.png";
import img15 from "./images/15.png";
import img16 from "./images/16.png";
import img17 from "./images/17.png";
import img18 from "./images/18.png";
import img19 from "./images/19.png";
import img20 from "./images/20.png";
import img21 from "./images/21.png";
import img22 from "./images/22.png";
import img23 from "./images/23.png";
import img24 from "./images/24.png";
import img25 from "./images/25.png";
import img26 from "./images/26.png";
import img27 from "./images/27.png";
import img28 from "./images/28.png";
import img29 from "./images/29.png";
import img30 from "./images/30.png";

const All = () => {
    const image=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30]
    return (
        <div className="all">
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

export default All
