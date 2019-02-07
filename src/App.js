import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./Navbar";
import Headline from "./Headline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Headline />
      </div>
    );
  }
}

export default App;
