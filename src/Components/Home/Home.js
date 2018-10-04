import React, {Component} from 'react'
import Banner from '../Banner/Banner'
import "./Home.css"

class Home extends Component {

    render(){
        return(
            <div className="home-main">
                <Banner />
                <h1 className="home-title">EMH Classical Music</h1>
                
            </div>
        )
    }
}
export default Home