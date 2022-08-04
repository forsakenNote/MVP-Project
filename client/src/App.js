import React, { useState } from "react";
import "./App.css";
// import logo from "./logo.svg";
import Search from "./components/Search";
import Display from "./components/Display";
import MapApi from "./components/MapApi";
import "./components/map.css";
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [appLat, setAppLat] = useState(null);
  const [appLng, setAppLng] = useState(null);
  const [appName, setAppName] = useState("");
  // const [appPhotos, setAppPhotos] = useState([]);
  // console.log("check photos", photosName);
  const [spots, setSpots] = useState([]);

  // const handleData = (newLat, newLng, newName) => {
  //   setAppLat(newLat);
  //   console.log("check new lat", newLat);

  //   setAppLng(newLng);
  //   console.log("check new lng", newLng);

  //   setAppName(newName);
  //   console.log("check new lng", newName);
  // };

  // const handleDataPhotos = (newPhotos) => {
  //   setPhotosName((state) => [...state, newPhotos]);
  //   console.log("check new photos", newPhotos);
  // }

  return (
    <div className="App">
      <Search
        // locationLatProp={(newLat, newLng, newName) =>
        //   handleData(newLat, newLng, newName)
        // }
        // locationLng={(newLng) => handleData(newLng)}
        // locationName={(newName) => handleData(newName)}
        //
        setSpots={setSpots}
      />

      <MapApi spots={spots} />

      <Display
        displayName={appName}
        // displayPhotos={appPhotos}
      />
    </div>
  );
}
