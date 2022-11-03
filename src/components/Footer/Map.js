import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
   width: "100%",
   height: "300px",
};

const position = {
   lat: 37.803941,
   lng: -122.472626,
};

export default function Map() {
   return (
      <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
         <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
         >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={position} />
         </GoogleMap>
      </LoadScript>
   );
}
