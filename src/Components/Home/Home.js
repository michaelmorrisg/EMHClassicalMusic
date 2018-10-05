import React, {Component} from 'react'
import Banner from '../Banner/Banner'
import "./Home.css"
import Contact from '../Contact/Contact'
import SongList from '../SongList/SongList'

class Home extends Component {

    render(){
        return(
            <div className="home-main">
                <Banner />
                <div className="banner-title">
                <h1 className="home-title">EMH Classical Music</h1>
                <h3 className="home-sub">Classics of the past, Recorded for the future</h3>
                </div>
                <div className="difference-main">
                <div className="difference-left">
                <h2>Hear the difference</h2>
                </div>
                <div className="difference-right">
                <p>Something here about how the music is recorded differently. It's recorded like a movie score, so you can tell it's better and whatnot.
                    Listen to the tracks below and hear the dang difference.
                </p>
                </div>
                </div>
                <SongList />
                <Contact />
            </div>
        )
    }
}
export default Home