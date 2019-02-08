import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./Navbar";
import Headline from "./Headline";
import Data from "./Data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Headline />
        <Data />
      </div>
    );
  }
}

export default App;
