import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Navbar from "./components/zones/navbar/Navbar"
//import Content from "./components/zones/Content/Content"
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Navbar}/>

      </div>
    );
  }
}

export default App;
