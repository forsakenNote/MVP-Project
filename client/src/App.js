import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './components/Search';
import Display from './components/Display';
import MapApi from './components/MapApi';
import './components/map.css'


export default function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <MapApi/>
      <Search placeholder="Enter a Location..." />
    </div>
  );
}


