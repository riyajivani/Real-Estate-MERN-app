import React from 'react'
import './map.scss'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin'

const Map = ({items}) => {
     // const position = [23.0225,72.5714] //ahmedabad
     const position = [52.4797,-1.90269] //Birmingham
  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
     <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {items.map((item)=>(
          <Pin item={item} key={item.id}/>
     ))}
  </MapContainer>
  )
}

export default Map