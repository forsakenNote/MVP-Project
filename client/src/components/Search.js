import React, { useState } from 'react';
import './Search.css';

// const keyNoFilter = "dbdb379a-6076-41bc-a46c-fcbcb6578cb4";
// const baseNoFilter = "https://us-central1-mari-a5cc7.cloudfunctions.net/api";
// const locationNoFilter = "/v1/spots/search/:query";

export default function Search({ placeholder }) {
  // const [loading, setLoading] = useState(false);
  // const [location, setLocation] = useState("");
  // const [photos, setPhotos] = useState(null);
  // const [error, setError] = useState("");

  // const handleInputChange = (event) => {
  //   setLocation(event.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form button clicked");
    

  //   setLoading(true);
  //   setError("");

  //   let photosDisplay = await getPhotos();
  //   setPhotos(photos);

  //   setLocation("");
  //   setLoading(false);
  }

  // // const getPhotos = async () => {
  // //   try {
  // //     let response = await fetch(url);
  // //     if (response.ok) {
  // //       let data = await response.json();
  // //       return data;
  // //     } else {
  // //       setError(`Server error: ${response.status} ${response.statusText}`); //on the server, but data does not exist or wrong parameters.
  // //     }
  // //   } catch (err) {
  // //     setError("Network error:", err.message); //error 500 not in the server
  // //   }

  // //   return null;
  // }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}/>
      </div>
      <div className="dataResults"></div>

      <button className="submitButton" onClick = {handleSubmit}>Submit</button>
    </div>
  )
 }
