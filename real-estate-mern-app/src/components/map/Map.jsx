import { React, useState, useEffect } from 'react'
import './map.scss'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import RoutingMachine from '../RoutingMachine';
import Pin from '../pin/Pin'

const Map = ({items}) => {
     const [userLocation, setUserLocation] = useState(null);
     const [destination, setDestination] = useState(null);

     useEffect(() => {
          // Get user's current location
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         console.log(position.coords.latitude, position.coords.longitude)
                         setUserLocation([position.coords.latitude, position.coords.longitude]);
                    },
                    (error) => {
                         console.error('Error getting location:', error);
                         alert('Failed to fetch your location!');
                    },
                    {
                         enableHighAccuracy: true,
                    }
               );
          }
     }, []);

     const position = [22.6708, 71.5724] //gujarat
  return (
       <MapContainer center={items.length === 1 ? [items[0].latitude, items[0].longitude] : position} zoom={7} scrollWheelZoom={false} className='map'>
     <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {items.map((item)=>(
          <Pin item={item} key={item.id} setRoute={setDestination} />
     ))}

            {userLocation && destination && (
                 <RoutingMachine
                      waypoints={[userLocation, destination]} // Pass user location and destination
                      routeWhileDragging={false}
                 />
            )}
  </MapContainer>
  )
}

export default Map