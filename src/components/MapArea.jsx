import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "../assets/images/icon-location.svg";
import { L } from "leaflet";
import "leaflet/dist/leaflet.css";

function MapArea(props) {
  const position = [52.51, 13.38];
  //   const customIcon = L.icon({
  //     iconUrl: locationIcon,
  //     iconSize: [36, 46],
  //     iconAnchor: [19, 38],
  //     popupAnchor: [0, -38],
  //   });

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>some stuff</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapArea;
