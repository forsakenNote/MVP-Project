import React, { useState, useEffect } from 'react';
import './Search.css';


//NoFilter

let baseURL = "https://us-central1-mari-a5cc7.cloudfunctions.net/api"
let apiKey= "c077470d-e76f-46da-96bd-f2bf5f9cba75"
let apiKey2= "0aca9d6b-fc90-4c78-958e-9f5a8d354ccf"

// let query = location //test with name of city like "Barcelona" as a string to test your fetch works
// const locationNoFilter = "/v1/spots/search/:query";

// let url = `${baseURL}/v1/spots/search/:${location}`;
// console.log('check location from Searchbar', location);

// let url = `${baseURL}/v1/spots/search/:barcelona`;

export default function Search() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const [savedPlaces, setSavedPlaces] = useState([]);
  console.log("check data from Searchbar", data);
 

  let url = `${baseURL}/v1/spots/search/:${location}`;
  console.log('check location from Searchbar', location);

  const handleInputChange = (event) => {
    setLocation(event.target.value)
  }

  const locationData = (savedPlaces) => {
    setSavedPlaces(savedPlaces)
    return savedPlaces
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form button clicked");
    locationData(data);
  }

  console.log("Check saved places", savedPlaces);

  function getData(data) {

    let options = {
             method: 'GET',
     headers: {
       Accept: 'application/json',
       'Cache-Control': 'no-cache',
       'Content-Type': 'application/json',
       Authorization: `Bearer ${apiKey2}`,
           },
         }
   
         fetch(url,options)
           .then(result => result.json())
           .then(data => {
             setData(data)
           })
           .catch(err => {
             console.log(`Error: ${err.message}`)
           });
   
       }
   
       useEffect(() => {
         getData(data);
       }, []) 

       console.log(data);

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
        type="text"
        name = "location"
        placeholder="Enter a Location..."
        value={location}
        onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="dataResults"></div>

      <button className="submitButton" onClick = {handleSubmit}>Submit</button>
    </div>
  )
 };




   // EXTRAC LAT AND LNG
      //  Create variable that access lat and lng in array of objects (data) 

  // let latNoFilter = [];
  // data.spots.lat
  // latNoFilter = data.map(spots => spots.lat);

  // let lngNoFilter = [];
  // data.spots.lng
  // lngNoFilter = data.map(spots => spots.lng);

      //  Pass variable to App.js
      // Pass variable to MapApi.js and map throught it.


      // function getLatLng(data) {
        // let latNoFilter = [];
        // let lngNoFilter = [];

        // let latNoFilter = data.map(spot => spots.lat);
        // let lngNoFilter = data.map(spot => spots.lgn);

      // }