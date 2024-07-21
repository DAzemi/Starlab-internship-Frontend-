import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapPin } from 'react-icons/fa';
import { renderToString } from 'react-dom/server'; // Import renderToString

const SimpleMap = () => {
  useEffect(() => {
    // Create a map centered at a specific location
    const map = L.map('map').setView([42.6624, 21.1655], 13);

    // Convert the React icon to SVG
    const iconSvg = renderToString(<FaMapPin />);
    
    // Create a custom Leaflet icon using the SVG
    const customIcon = new L.divIcon({
      className: 'leaflet-div-icon',
      html: `<div>${iconSvg}</div>`,
      iconSize: [1, 1],
    });

    // Add a marker for Prishtina with the custom icon
    L.marker([42.6620, 21.1655], { icon: customIcon }).addTo(map)
      .bindPopup('Hello, we are here!')
      .openPopup();

    // Add the TileLayer for the map (using OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div id="map" className="h-80 mt-6 bg-gray-200 mr-10 ml-10 rounded-md">

    </div>
  );
};

export default SimpleMap;
