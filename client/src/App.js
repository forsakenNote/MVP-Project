import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Search from "./components/Search";
import Display from "./components/Display";
import MapApi from "./components/MapApi";
import "./components/map.css";
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [appLat, setAppLat] = useState("");
  const [appLng, setAppLng] = useState("");
  const [appName, setAppName] = useState("");
  // const [photosName, setPhotosName] = useState([]);
  // console.log("check photos", photosName);

  const handleData = (newLat, newLng, newName) => {
    setAppLat((state) => [...state, newLat]);
    console.log("check new lat", newLat);

    setAppLng((state) => [...state, newLng]);
    console.log("check new lng", newLng);

    setAppName((state) => [...state, newName]);
    console.log("check new lng", newName);


  };

  // const handleDataPhotos = (newPhotos) => {
  //   setPhotosName((state) => [...state, newPhotos]);
  //   console.log("check new photos", newPhotos);
  // }

  return (
    <div className="App">
      <Search
        locationLat={(newLat) => handleData(newLat)}
        locationLng={(newLng) => handleData(newLng)}
        locationName={(newName) => handleData(newName)}
        //
      />

      <MapApi dataLa={appLat && appLng} />

      <Display dataPhotos={appName} />
    </div>
  );
}
