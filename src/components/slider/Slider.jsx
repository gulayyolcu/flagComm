import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import "./slider.css";
import img8 from "./image/8.jpg"
import img2 from "./image/2.jpg"
import img3 from "./image/3.jpg"
import img4 from "./image/4.jpg"
import img5 from "./image/5.jpg"
import img6 from "./image/6.jpg"
import img7 from "./image/7.jpg"

const Thumbnail = ({ arr, image, index }) => {
    return (<div className="tumbnail">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''} alt=""
          />
        ))
      }
    </div>)
  }
  
  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
    return (
        <div className="slideshow">
          <img className="mainImg" src={imgs[index]} alt=""/>
          <div className="actions">
            <ArrowBackIos onClick={prev} className="icon"/>
            <ArrowForwardIos onClick={next} className="icon"/>
          </div>
          <Thumbnail arr={imgs} image={setIndex} index={index} />
        </div>
      )
    }

const Slider = () => {
    return (
        <div className="slider">


      <Slideshow
        imgs={[img5,img2,img3,img4,img8,img6,img7
     
        ]}
      />
        </div>
    )
}

export default Slider
