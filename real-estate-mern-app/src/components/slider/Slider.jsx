import React, { useState } from 'react'
import './slider.scss'
import arrow from '../../../public/arrow.png'

const Slider = ({images}) => {

  const [imgIndex,setImgIndex] = useState(null)

  const chageSlide = (direction) =>{
    if(direction==="left"){
      if(imgIndex===0){
        setImgIndex(images.length-1)
      }else{
        setImgIndex(imgIndex-1)
      }
    }else{
      if(imgIndex===images.length-1){
        setImgIndex(0)
      }else{
        setImgIndex(imgIndex+1)
      }
    }

  }

  return (
    <div className='slider'>
      {imgIndex !==null &&
        <div  className="fullslider">
          <div className="arrow">
            <img src={arrow} alt="" onClick={()=>chageSlide("left")}/>
          </div>
          <div className="imgContainer">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src={arrow} className='right' alt="" onClick={()=>chageSlide("right")}/>
          </div>
          <div className="close" onClick={()=>{setImgIndex(null)}}>X</div>
        </div>  
      }

     <div className="bigImage">
      <img src={images[0]} alt="" onClick={()=>{setImgIndex(0)}}/>
     </div>
     <div className="smallImages">
      {images.slice(1).map((image,index)=>(
        <img src={image} alt='' key={index} onClick={()=>{setImgIndex(index+1)}}/>
      ))}
     </div>
    </div>
  )
}

export default Slider