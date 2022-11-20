import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 37.7576793,
  lng: -122.5076402,
};

function Map({containerStyle}) {
  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
