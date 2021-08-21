import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { Helmet } from 'react-helmet';
import { SITES } from './shared/sites';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: SITES
    };
  }
  render() {
    return (
      <div className="App" >
        <Helmet>
          <style>
            {'body {background-color: #333}'}
          </style>
        </Helmet>
        <Navbar light color="blue">
          <div className="container justify-content-center">
            <h1 className="text-light">Welcome to Kula Square</h1>
          </div>
        </Navbar>
        <Directory sites={this.state.sites} />
      </div>
    )
  }
}

export default App;
