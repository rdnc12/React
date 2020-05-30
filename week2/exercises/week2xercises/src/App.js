import React from "react";

import Friend from "./components/Friend/Friend";
import DogGallery from "./components/DogGallery/DogGallery";
import RandomJoke from './components/Joke/RandomJoke/RandomJoke'
import "./App.css";

function App() {
  return (
    <div className="App">
      <RandomJoke/>
      <Friend />
      <DogGallery />
    </div>
  );
}

export default App;
