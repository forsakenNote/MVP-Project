import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './components/Search';
import Display from './components/Display';
import MapApi from './components/MapApi';
import './components/map.css'


export default function App() {
  const [latLng, setLatLng] = useState("");

  console.log("check lat and lng", latLng);


  const handleData = (newData) =>  {
    setLatLng((state) => [...state, newData]);
    console.log("check new data", newData); 
  }

  return (
    <div className="App">
      <Search 
      locationData = {(newData) => handleData(newData)}/>
      
      <MapApi
      dataLatLng = {latLng}/>
    </div>
  );
}


