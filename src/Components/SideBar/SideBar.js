import React, {Component} from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom';

class SideBar extends Component {

    leadTrack(){
        window.fbq('track', 'Lead')
        window.pintrk('track', 'lead')
    }
    purchaseTrack(){
        window.fbq('track', 'Purchase');
        window.pintrk('track', 'checkout')
    }

    render(props){
        return (
            <div className={this.props.openMenu ? " open-side sidebar-main" : "close-side sidebar-main"}>
                <div className="sidebar-content">
                        <Link to="/"><li>Home</li></Link>
                        <li><a onClick={()=>this.purchaseTrack()} href="https://emhclassicalmusic.bandcamp.com/">Buy Albums</a></li>
                        <li>Streaming</li>
                        <div>
                            <ul>
                                <li><a onClick={()=>this.leadTrack()} href="https://open.spotify.com/album/5Pkgb0P3Sh9TPl14IBsyE2">Spotify</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://itunes.apple.com/us/album/christmas-a-la-vivaldi/1434635644">iTunes</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://play.google.com/store/music/album/EMH_Classical_Music_Czech_Symphony_Chamber_Group_C?id=Bzq2myrbhfvdheb6i7b6a53yqfu&hl=en">Google Play</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://spotify.com">Deezer</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://www.amazon.com/Trip-Prague-City-Philharmonic/dp/B00G92SJVU/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1539099823&sr=1-1-mp3-albums-bar-strip-0&keywords=a+trip+to+Prague">Amazon Music</a></li>
                            </ul>
                        </div>
                        <Link to="/licensing"><li>Licensing</li></Link>
                        <li><a href="https://www.youtube.com/user/EMHClassicalMusic">YouTube</a></li>
                        <Link to="/about"><li>About</li></Link>
                    </div>
            </div>
        )
    }
}
export default SideBar