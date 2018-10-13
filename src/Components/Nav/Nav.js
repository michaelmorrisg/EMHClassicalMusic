import React, {Component} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component{
    constructor(){
        super()
        this.state = {
            expanded: false
        }
    }

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
            <div className="nav-main">
                <div className="nav-content">
                    <ul className="nav-left">
                        <Link to="/"><li>Home</li></Link>
                        <li><a onClick={()=>this.purchaseTrack()} href="https://emhclassicalmusic.bandcamp.com/">Buy Albums</a></li>
                        <li className="mouse" onMouseEnter={()=>this.setState({expanded: true})} onMouseLeave={()=>this.setState({expanded: false})}>Streaming</li>
                        <div className={this.state.expanded ? "streaming showing" : ' streaming hidden'} onMouseEnter={()=>this.setState({expanded: true})} onMouseLeave={()=>this.setState({expanded: false})}>
                            <ul>
                                <li><a onClick={()=>this.leadTrack()} href="https://open.spotify.com/album/5Pkgb0P3Sh9TPl14IBsyE2">Spotify</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://itunes.apple.com/us/album/christmas-a-la-vivaldi/1434635644">Apple Music</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://play.google.com/store/music/album/EMH_Classical_Music_Czech_Symphony_Chamber_Group_C?id=Bzq2myrbhfvdheb6i7b6a53yqfu&hl=en">Google Play</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://www.deezer.com/album/72161212?utm_source=deezer&utm_content=album-72161212&utm_term=2363008628_1539218101&utm_medium=web">Deezer</a></li>
                                <li><a onClick={()=>this.leadTrack()} href="https://www.amazon.com/Trip-Prague-City-Philharmonic/dp/B00G92SJVU/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1539099823&sr=1-1-mp3-albums-bar-strip-0&keywords=a+trip+to+Prague">Amazon Music</a></li>
                            </ul>
                        </div>
                    </ul>
                    <img id="nav-logo" src={require("../../Assets/logo.jpg")} />
                    <ul className="nav-right">
                        <Link to="/licensing"><li>Licensing</li></Link>
                        <li><a href="https://www.youtube.com/user/EMHClassicalMusic">YouTube</a></li>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav