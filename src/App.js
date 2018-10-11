import React, { Component } from 'react';
import './Reset.css'
import Nav from './Components/Nav/Nav'
import NavMobile from './Components/NavMobile/NavMobile'
import SideBar from './Components/SideBar/SideBar'
import Backdrop from './Components/Backdrop/Backdrop'
import Banner from './Components/Banner/Banner'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import routes from './routes'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      openMenu: false
    }
  }
  toggleMenu = this.toggleMenu.bind(this)

  toggleMenu(){
    this.setState({
      openMenu: !this.state.openMenu
    })
    console.log(this.state.openMenu)
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <NavMobile openMenu={this.state.openMenu} toggleMenu={this.toggleMenu} />
        <SideBar openMenu={this.state.openMenu}/>
        <Backdrop toggleMenu={this.toggleMenu} openMenu={this.state.openMenu}/>
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
