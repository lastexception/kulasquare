import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar light color="info">
          <div className="container">
            <NavbarBrand href="/">Kula Square</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
