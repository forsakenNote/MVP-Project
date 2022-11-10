import React, { useState } from 'react';
import { ethers } from "ethers";
import UserDisplay from "./components/UserDisplay";
import Form from "./components/Form";
import './App.css';


function App() {

  const [walletAddress, setWalletAddress] = useState("");

  //Request access to user's METAMASK wallet
  async function requestAccount() {
    console.log("Requesting accounts...")

      //check if metamask extension exists
  if(window.ethereum) {
    console.log("detected");

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log("Error connecting...");
    }

  } else {
    console.log("Meta Mask not detected");
  }
}


async function connectWallet() {
  if(typeof window.ethereum !== 'undefined') {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  }
}

  return (
    <div>
      <header className="App-header">
        <button
        
        onClick={requestAccount}


        >Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>

      </header>

    </div>
  )
}

export default App

