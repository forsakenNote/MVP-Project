import "leaflet/dist/leaflet.css";
import './map.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
// import L from "leaflet";


export default function MapApi (dataLatLng) {

    // function getIcon(_iconSize) {
    //     return L.icon( {
    //         iconUrl: require("./src/icons/icon.pgn"),
    //         iconSize: [_iconSize]
    //     })
    // }

    const data = {
        spots:[{id:1, place: "New York", lat:40.712776, long:-74.005974 },{id:2, place: "Barcelona", lat:41.385063, long:2.173404},{id:3, place: "Morocco", lat:31.791702, long:-7.092620}]
        }

    console.log("check DATA", data);

    let dataLat = 0;
    let dataLng = 0;
    for(let i = 0; i < data.length; i++) {
        console.log("check i", data[i]);
        for(let j = 0; j < data[i].length; j++) {
            console.log("check j", data[i][j]);
            dataLat = data[i][j].lat;
            dataLng = data[i][j].lng;
            return dataLat, dataLng;
        }
    }


        
        

    return (
        <div className="App">
            <MapContainer className="map" center={[51.505, -0.09]} zoom={0} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker 
            position={[51.505, -0.09]}>
                {/* position={[dataLat, dataLng]}> */}

                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                 </Popup>
            </Marker>

            </MapContainer>

        </div>
    )
}


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