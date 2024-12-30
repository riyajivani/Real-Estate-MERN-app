import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

const RoutingMachine = ({ waypoints, routeWhileDragging }) => {
     const map = useMap();

     useEffect(() => {
          const routingControl = L.Routing.control({
               waypoints: waypoints.map((point) => L.latLng(point)),
               routeWhileDragging,
               createMarker: () => null, // Optional: Prevent extra markers from appearing
          }).addTo(map);

          //to remove the panel which shows all moves within the map.
          const container = routingControl.getContainer();
          if (container) {
               container.parentNode.removeChild(container);
          }

          return () => map.removeControl(routingControl);
     }, [map, waypoints, routeWhileDragging]);

     return null;
};

export default RoutingMachine