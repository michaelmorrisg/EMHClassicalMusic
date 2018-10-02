import React, { Component } from 'react';
import './Reset.css'
import Nav from './Components/Nav/Nav'
import Banner from './Components/Banner/Banner'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
