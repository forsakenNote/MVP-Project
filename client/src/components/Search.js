import React, { useState, useEffect } from "react";
import "./Search.css";

//NoFilter

let baseURL = "https://us-central1-mari-a5cc7.cloudfunctions.net/api";
// let apiKey = "c077470d-e76f-46da-96bd-f2bf5f9cba75";
//let apiKey2 = "0aca9d6b-fc90-4c78-958e-9f5a8d354ccf";
// let apiKey2 = "e5a0e2a8-4f5c-439a-947f-67a5b86eec4d";
let apiKey2 = "b1626725-5f9f-4e52-a2ca-2ec7859e58a5";

// let query = location //test with name of city like "Barcelona" as a string to test your fetch works
// const locationNoFilter = "/v1/spots/search/:query";

// console.log('check location from Searchbar', location);

// let url = `${baseURL}/v1/spots/search/:barcelona`;

export default function Search({ setSpots }) {
  const [location, setLocation] = useState("");


  //update state of component
  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };


  //gets current value from the data input and pass it as prop
  const handleSubmit = (event) => {
    // event.preventDefault(); --no need because no form
    console.log("form button clicked");


//Fetch code to get data from the API NoFilter
//Accessing the spots that would let us extract lat and lng
//passing spots to App.js

    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey2}`,
      },
    };

    fetch(`${baseURL}/v1/spots/search/:${location}`, options)
      .then((result) => result.json())
      .then((dataObject) => {
        setSpots(dataObject.data.spots);
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };


//Creating the search bar to input location name

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
