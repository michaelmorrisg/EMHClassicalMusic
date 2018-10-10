import React, {Component} from 'react'
import "./Banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGooglePlay, faItunes, faSpotify, faBandcamp} from '@fortawesome/free-brands-svg-icons'

class Banner extends Component {
    constructor(){
        super()
        this.state = {
            picId: 'one',
            arr: ['one', 'two', 'three', 'four', 'five'],
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
            <div className="banner-main">
                {/* <img src="https://f4.bcbits.com/img/a2606312365_10.jpg"/> */}
                <div className="banner-content">
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
                                    <a onClick={()=>this.leadTrack()} href=""><img className="grow" src={this.state.white? require('../../Assets/apple_white.svg') : require('../../Assets/apple_music.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href=""><img className="grow" src={require('../../Assets/google_play.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href=""><img className="grow" src={require('../../Assets/spotify.svg')}/></a>
                                </div>
                                <div className="bottom-row">
                                    <a onClick={()=>this.leadTrack()} href=""><img className="grow" src={this.state.white? require('../../Assets/deezer_white.svg') : require('../../Assets/deezer.svg')}/></a>
                                    <a onClick={()=>this.leadTrack()} href=""><img className="grow" src={require('../../Assets/amazon_music.svg')}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-buy">
                        <a onClick={()=>this.purchaseTrack()} href="https://emhclassicalmusic.bandcamp.com/"><div className="buy-content">
                            <h1>Buy Album</h1>
                        </div></a>
                                {/* <FontAwesomeIcon icon={faBandcamp} size="3x"/> */}
                    </div>
                </div>
                <div className="banner-right">
                    <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false} transitionTime={0} interval={4000}>
                    <div id='one'>

                    </div>
                    <div id='two'>
                        
                    </div>
                    <div id='three'>
                        
                    </div>
                    <div id='four'>
                        
                    </div>
                    <div id='five'>
                        
                    </div>
                    </Carousel>

                    </div>
                </div>
                </div>
        )
    }
}
export default Banner