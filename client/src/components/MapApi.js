//import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

export default function MapApi({ spots }) {
  return (
    <div className="App">
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={0}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {spots.map((spot) => {
          return (
            <Marker
              position={[spot.lat, spot.lng]}
            >
              <Popup>
                {spot.name}
                <img
                  src={spot.photos[0].urls.regular}
                  style={{ width: "100%" }}
                  alt=""
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

