import React, { useState, useEffect } from "react";
import "./Search.css";

//NoFilter

let baseURL = "https://us-central1-mari-a5cc7.cloudfunctions.net/api";
let apiKey = "c077470d-e76f-46da-96bd-f2bf5f9cba75";
let apiKey2 = "0aca9d6b-fc90-4c78-958e-9f5a8d354ccf";

// let query = location //test with name of city like "Barcelona" as a string to test your fetch works
// const locationNoFilter = "/v1/spots/search/:query";

// let url = `${baseURL}/v1/spots/search/:${location}`;
// console.log('check location from Searchbar', location);

// let url = `${baseURL}/v1/spots/search/:barcelona`;

export default function Search() {
  const [location, setLocation] = useState("");
  const [dataObject, setDataObject] = useState(null);
  // const [savedPlaces, setSavedPlaces] = useState([]);
  // const [savedPhotos, setSavedPhotos] = useState([]);
  const [savedLat, setSavedLat] = useState([]);
  const [savedLng, setSavedLng] = useState([]);
  const [savedName, setSavedName] = useState([]);


  console.log("check data from Searchbar", dataObject);

  let url = `${baseURL}/v1/spots/search/:${location}`;
  console.log("check location from Searchbar", location);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };



  // const locationData = (savedPlaces) => {
  //   setSavedPlaces(savedPlaces);
  //   return savedPlaces;
  // };

  // console.log("Check saved places", savedPlaces);

  const locationLat = (savedLat) => {
    setSavedLat(savedLat);
    return savedLat;
  };

  const locationLng = (savedLng) => {
    setSavedLng(savedLng);
    return savedLng;
  };
  
  const locationName = (savedName) => {
    setSavedName(savedName);
    return savedName;
  };
  
  //   const locationPhoto = (savedPhotos) => {
  //   setSavedPhotos(savedPhotos)
  //   return savedPhotos;
  // }
   // console.log("check saved photos", savedPhotos);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form button clicked");
    locationLat(apiLat);
    locationLng(apiLng);
    locationName(apiName);
    // locationPhoto(apiPhoto);
  };


  function getData(dataObject) {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(url, options)
      .then((result) => result.json())
      .then((dataObject) => {
        setDataObject(dataObject);
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  }

  useEffect(() => {
    getData(dataObject);
  }, []);



  //  console.log("CHECK DATA", dataObject.data.spots.map(e => console.log(e.photos)));

   console.log("CHECK DATA", dataObject.data);

  // LAT AND LNG WORKS
   let apiLat = dataObject.data.spots.map(e => e.lat); 
   let apiLng = dataObject.data.spots.map(e => e.lng); 

   console.log("CHECK LAT", apiLat);
   console.log("CHECK LNG", apiLng);


   //NAME 

   let apiName = dataObject.data.spots.map(e => e.name);
   console.log("CHECK NAME", apiName);


     // PHOTOS WORKS
  let apiPhotos = dataObject.data.spots.map(e => e.photos);
  console.log("CHECK PHOTOS", apiPhotos );

  // TO TEST:
  // map apiPhotos to access urls
  // e.photo.map / e.photos.urls.map

  // let apiUrls = apiPhotos.map(e => e.urls);
  // console.log("CHECK URLS", apiUrls);




  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          name="location"
          placeholder="Enter a Location..."
          value={location}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="dataResults"></div>

      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

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
