import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 37.7576793,
  lng: -122.5076402,
};

function MyComponent({containerStyle}) {
  const { isLoaded } = useJsApiLoader({
    id: process.env.MAP_ID,
    googleMapsApiKey: process.env.MAP_API_KEY,
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center}/>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
