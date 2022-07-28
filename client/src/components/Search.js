import React, { useState, useEffect } from 'react';
import './Search.css';


//NoFilter

let baseURL = "https://us-central1-mari-a5cc7.cloudfunctions.net/api"
let apiKey= "c077470d-e76f-46da-96bd-f2bf5f9cba75"
// let query = location //test with name of city like "Barcelona" as a string to test your fetch works
// const locationNoFilter = "/v1/spots/search/:query";

let url = `${baseURL}/v1/spots/search/:${location}`;
console.log('check location from Searchbar', location);

// let url = `${baseURL}/v1/spots/search/:barcelona`;

export default function Search( { placeholder }) {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  console.log("check data from Searchbar", data);


  const handleInputChange = (event) => {
    setLocation(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form button clicked");
  }



  function getData(data) {

    let options = {
             method: 'GET',
     headers: {
       Accept: 'application/json',
       'Cache-Control': 'no-cache',
       'Content-Type': 'application/json',
       Authorization: `Bearer ${apiKey}`,
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



  return (
    <div className="search">
      <div className="searchInputs">
        <input 
        type="text" 
        placeholder={placeholder}
        value={location}
        onChange={handleInputChange}
        />
      </div>
      <div className="dataResults"></div>

      <button className="submitButton" onClick = {handleSubmit}>Submit</button>
    </div>
  )
 }
