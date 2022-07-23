import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <Search placeholder="Enter a Location..." />
    </div>
  );
}

export default App;
