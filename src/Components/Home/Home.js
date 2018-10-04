import React, {Component} from 'react'
import Banner from '../Banner/Banner'
import "./Home.css"
import Contact from '../Contact/Contact'

class Home extends Component {

    render(){
        return(
            <div className="home-main">
                <Banner />
                <h1 className="home-title">EMH Classical Music</h1>
                <h4>Classics of the past, Recorded for the future</h4>
                <Contact />
            </div>
        )
    }
}
export default Home