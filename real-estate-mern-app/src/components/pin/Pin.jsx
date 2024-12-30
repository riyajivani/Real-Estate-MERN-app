import React from 'react'
import './pin.scss'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

const Pin = ({ item, setRoute }) => {

  const handleGetDirections = () => {
    setRoute([item.latitude, item.longitude]);
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupcontainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className='bed'>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
            <button onClick={handleGetDirections} className='directionbtn'>Get Directions</button>
          </div>
        </div>
          </Popup>
        </Marker>
  )
}

export default Pin