import React, {Component} from 'react'

class BannerLeft extends Component {
    constructor(){
        super()
        this.state = {
            white: false
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
            <div className="banner-left">
            <div className="banner-stream">
                    <div className="stream-content" onMouseEnter={()=>this.setState({white: true})} onMouseLeave={()=>this.setState({white:false})}>
                        <div>
                            <h1>Stream Now</h1>
                        </div>
                        <div className="banner-stream-icons">
                            {/* <FontAwesomeIcon icon={faGooglePlay} size="3x"/>
                            <FontAwesomeIcon icon={faSpotify} size="3x"/>
                            <FontAwesomeIcon icon={faItunes} size="3x"/> */}
                            <div className="top-row">
                                <a onClick={()=>this.leadTrack()} href="https://itunes.apple.com/us/album/christmas-a-la-vivaldi/1434635644"><img className="grow" src={this.state.white? require('../../Assets/apple_white.svg') : require('../../Assets/apple_music.svg')}/></a>
                                <a onClick={()=>this.leadTrack()} href="https://play.google.com/store/music/album/EMH_Classical_Music_Czech_Symphony_Chamber_Group_C?id=Bzq2myrbhfvdheb6i7b6a53yqfu&hl=en"><img className="grow" src={require('../../Assets/google_play.svg')}/></a>
                                <a onClick={()=>this.leadTrack()} href="https://open.spotify.com/album/5Pkgb0P3Sh9TPl14IBsyE2"><img className="grow" src={require('../../Assets/spotify.svg')}/></a>
                            </div>
                            <div className="bottom-row">
                                <a onClick={()=>this.leadTrack()} href="https://www.deezer.com/album/72161212?utm_source=deezer&utm_content=album-72161212&utm_term=2363008628_1539218101&utm_medium=web"><img className="grow" src={this.state.white? require('../../Assets/deezer_white.svg') : require('../../Assets/deezer.svg')}/></a>
                                <a onClick={()=>this.leadTrack()} href="https://www.amazon.com/Trip-Prague-City-Philharmonic/dp/B00G92SJVU/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1539099823&sr=1-1-mp3-albums-bar-strip-0&keywords=a+trip+to+Prague"><img className="grow" src={require('../../Assets/amazon_music.svg')}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-buy">
                    <a onClick={()=>this.purchaseTrack()} href="https://emhclassicalmusic.bandcamp.com/album/christmas-a-la-vivaldi"><div className="buy-content">
                        <h1>Get Christmas A La Vivaldi</h1>
                    </div></a>
                            {/* <FontAwesomeIcon icon={faBandcamp} size="3x"/> */}
                </div>
            </div>
        )
    }
}
export default BannerLeft