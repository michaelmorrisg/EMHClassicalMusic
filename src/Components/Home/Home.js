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

    leadTrack(){
        window.fbq('track', 'Lead')
        window.pintrk('track', 'lead')
    }
    purchaseTrack(){
        window.fbq('track', 'Purchase');
        window.pintrk('track', 'checkout')
    }

    render(){
        return(
            <div className="home-main">
                <Banner />
                <BannerTitle />
                <div className="difference-main">
                <div className="difference-left">
                    <h2>Hear the Difference</h2>
                </div>
                <div className="difference-right">
                <p>We record our classical albums using the same methods as modern movie scores. This brings out stunning detail and clarity you don’t hear in traditional classical recordings. But don’t just take our word for it- listen yourself and hear the difference.</p>
                </div>
                </div>
                <SongList />
                <div className="albums-main">
                    <div className="albums-left">
                        <h2>Stream</h2>
                        <div className="banner-stream-icons-lower">
                                <div className="top-row">
                                    <a onClick={()=>this.leadTrack()} href="https://itunes.apple.com/us/album/christmas-a-la-vivaldi/1434635644"><img className="grow" src={require('../../Assets/apple_music.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href="https://play.google.com/store/music/album/EMH_Classical_Music_Czech_Symphony_Chamber_Group_C?id=Bzq2myrbhfvdheb6i7b6a53yqfu&hl=en"><img className="grow" src={require('../../Assets/google_play.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href="https://open.spotify.com/album/5Pkgb0P3Sh9TPl14IBsyE2"><img className="grow" src={require('../../Assets/spotify.svg')}/></a>
                                </div>
                                <div className="bottom-row">
                                    <a onClick={()=>this.leadTrack()} href="https://www.deezer.com/album/72161212?utm_source=deezer&utm_content=album-72161212&utm_term=2363008628_1539218101&utm_medium=web"><img className="grow" src={require('../../Assets/deezer.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href="https://www.amazon.com/Trip-Prague-City-Philharmonic/dp/B00G92SJVU/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1539099823&sr=1-1-mp3-albums-bar-strip-0&keywords=a+trip+to+Prague"><img className="grow" src={require('../../Assets/amazon_music.svg')}/></a>
                                </div>
                            </div>
                    </div>
                    <div className="albums-right">
                    <h2>Buy</h2>
                        <div>
                            <a onClick={()=>this.purchaseTrack()} href="https://emhclassicalmusic.bandcamp.com/"><img className="bandcamp-logo grow" src={require('../../Assets/bandcamp.svg')}/></a>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        )
    }
}
export default Home