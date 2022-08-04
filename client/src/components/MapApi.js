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
              // position={[51.505, -0.09]}
              position={[spot.lat, spot.lng]}
            >
              <Popup>
                {spot.name}
                <img
                  src={spot.photos[0].urls.regular}
                  style={{ width: "100%" }}
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

// const data = {
//     spots:[{id:1, place: "New York", lat:40.712776, long:-74.005974 },{id:2, place: "Barcelona", lat:41.385063, long:2.173404},{id:3, place: "Morocco", lat:31.791702, long:-7.092620}]
//     }

// console.log("check DATA", data.spots);

// let dataLat = 0;
// let dataLng = 0;
// for(let i = 0; i < dataLatLng.length; i++) {
//     console.log("check i", dataLatLng[i]);
//     for(let j = 0; j < dataLatLng[i].length; j++) {
//         console.log("check j", dataLatLng[i][j]);
//         dataLat = dataLatLng[i][j].lat;
//         dataLng = dataLatLng[i][j].lng;
//         return dataLat, dataLng;
//     }
// }

// icon={getIcon(20)}
// position= {[latNoFilter, lngNoFilter]}

// <Popup>
//     A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>

//  {/* <Marker
//             position={[51.505, -0.09]}
//             // icon={getIcon(20)}

//             >
//             position={[latNoFilter, lngNoFilter]}> */}

//                 {/* <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup> */}
//             {/* </Marker> */}

// {data.map(e => (
//     <Marker
//     key = {data.spots.id}
//     position = {[data.spots.lat, data.spots.lng]}>
//     </Marker>
// ))}

//  {/* {dataLatLng.map(e => (
//         <Marker
//         key = {e.spots.id}
//         position = {[e.spots.lat, e.spots.lng]}>
//         </Marker>
//     ))} */}

// ICON

// function getIcon(_iconSize) {
//     return L.icon( {
//         iconUrl: require("./src/icons/icon.pgn"),
//         iconSize: [_iconSize]
//     })
// }
