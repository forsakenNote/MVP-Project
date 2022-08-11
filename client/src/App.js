import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";
import MapApi from "./components/MapApi";
import "./components/map.css";
// import logo from "./components/icons/logo_imaquo.png"
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [appName, setAppName] = useState("");
  const [spots, setSpots] = useState([]);


// const logoImaquo = () => {
//     return <img src={logo} alt="logo"/>
//   }


  return (
    <div className="App">
      
      {/* <div className="logo">
       {logoImaquo()} 
      </div> */}

      <div className="container">
      <Search
        setSpots={setSpots}
      />

      <MapApi spots={spots} />

      <Display
        displayName={appName}
      />
      </div>

    </div>
  );
}
