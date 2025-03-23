import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { motion } from "framer-motion";


const customIcon = new L.Icon({
  iconUrl: "/location.png", 
  iconSize: [50, 50], 
  iconAnchor: [25, 50], 
  popupAnchor: [0, -50], 
  className: 'custom-leaf-icon object-cover rounded-full'
});

const LocationMap = () => {
  const position = [11.2344408,75.791362]; 

  let apiKey = import.meta.env.VITE_LOCATION_API

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true, amount: 0.2 }}
      className="mb-10 bg-gradient-to-r from-gray-200 to-gray-100 z-[10] "
    >
    <div id="Location" className=" font-poppins text-center max-w-full md:m-5 lg:mx-52 mx-auto py-16 z-[10] lg:py-20 px-4">
    <h2 class="text-4xl max-sm:text-3xl py-16 font-bold text-gray-900">Our Location</h2>
      <MapContainer
  center={position}
  zoom={13}
  scrollWheelZoom={false} 
  style={{ height: "400px", width: "100%", borderRadius: "12px" }}
  className="shadow-lg "
  whenCreated={(map) => setTimeout(() => map.flyTo(position, 15), 1000)}
>
       
<TileLayer  url={`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${apiKey}`} />

        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>Our Business Location</strong>
            <br />
            Kallai, kozhikode, kerala-673003


          </Popup>
        </Marker>
      </MapContainer>
    <p className="py-3 text-gray-700" ><strong>Our Business Location</strong>
            <br />
            Kallai, kozhikode, kerala-673003 </p>
    </div>
    </motion.div>
  );
};

export default LocationMap;
