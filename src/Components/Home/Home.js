import React, {Component} from 'react'
import Banner from '../Banner/Banner'
import BannerTitle from '../BannerTitle/BannerTitle'
import "./Home.css"
import Contact from '../Contact/Contact'
import SongList from '../SongList/SongList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGooglePlay, faItunes, faSpotify, faBandcamp} from '@fortawesome/free-brands-svg-icons'

class Home extends Component {

    render(){
        return(
            <div className="home-main">
                <Banner />
                <BannerTitle />
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
                <div className="albums-main">
                    <div className="albums-left">
                        <h2>Stream</h2>
                        <div className="banner-stream-icons-lower">
                                <div className="top-row">
                                    <a href=""><img src={require('../../Assets/apple_music.svg')}/></a>
                                    <a href=""><img src={require('../../Assets/google_play.svg')}/></a>
                                    <a href=""><img src={require('../../Assets/spotify.svg')}/></a>
                                </div>
                                <div className="bottom-row">
                                    <a href=""><img src={require('../../Assets/deezer.svg')}/></a>
                                    <a href=""><img src={require('../../Assets/amazon_music.svg')}/></a>
                                </div>
                            </div>
                    </div>
                    <div className="albums-right">
                    <h2>Buy</h2>
                        <div>
                            <a href=""><img className="bandcamp-logo" src={require('../../Assets/bandcamp.svg')}/></a>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        )
    }
}
export default Home