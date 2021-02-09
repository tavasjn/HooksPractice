import React, { Component } from "react";
import "./App.css";

// Imports for Comp
import LandingComponent from './Components/LandingComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingComponent/>
      </div>
    );
  }
}

export default App;
