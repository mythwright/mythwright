import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import Mappings from "./mappings/Mappings";
import NavBar from "./nav/NavBar";

function App() {
  return (
    <div className="App min-h-screen">
      <NavBar />
      <div className={"h-16"}/>
      <div className={"w-5/6 min-h-screen mx-auto"}>
        <Mappings />
      </div>
    </div>
  );
}

export default App;
