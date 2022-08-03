import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './components/Search';
import Display from './components/Display';
import MapApi from './components/MapApi';
import './components/map.css';
// import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  const [latLng, setLatLng] = useState("");
  // const [photosName, setPhotosName] = useState([]);

  console.log("check lat and lng", latLng);

  // console.log("check photos", photosName);


  const handleData = (newData) =>  {
    setLatLng((state) => [...state, newData]);
    console.log("check new data", newData); 
  }

  // const handleDataPhotos = (newPhotos) => {
  //   setPhotosName((state) => [...state, newPhotos]);
  //   console.log("check new photos", newPhotos);
  // }

  return (
    <div className="App">
      <Search 
      locationData = {(newData) => handleData(newData)}
      // 
      />
      
      <MapApi
      dataLatLng = {latLng}/>

      <Display
      dataPhotos = {photosName}/>

    </div>
  );
}


