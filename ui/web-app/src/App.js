import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from "react-router-dom/es/NavLink";



class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <form action="">
                <input type="text" value="chris@bestbuddies.org" />
                <input type="text" value="1234" />
            </form>
            <NavLink to="Dashboard">Login</NavLink>
        </p>
      </div>
    );
  }
}

export default App;
