import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 42.2738123, // Latitudine del B&B
  lng: 12.6370238, // Longitudine del B&B
};

const Map = () => {
  // Coordinate ottenute dalla Geocoding API per l'indirizzo "Piazza del Colosseo, Roma"
 
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
