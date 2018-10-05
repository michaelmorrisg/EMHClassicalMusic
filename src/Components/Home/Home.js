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
                <div className="difference-main">
                <div className="differenec-left">
                <h2>Hear the difference</h2>
                </div>
                <div className="differenec-right">
                <p>Something here about how the music is recorded differently. It's recorded like a movie score, so you can tell it's better and whatnot.</p>
                </div>
                </div>
                <Contact />
            </div>
        )
    }
}
export default Home