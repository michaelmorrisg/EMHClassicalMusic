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
        }
    }


    render(){

        return(
            <div className="banner-main">
                {/* <img src="https://f4.bcbits.com/img/a2606312365_10.jpg"/> */}
                <div className="banner-content">
                <div className="banner-left">
                <div className="banner-stream">
                        <div className="stream-content">
                            <div>
                                <h1>Stream Now</h1>
                            </div>
                            <div className="banner-stream-icons">
                                {/* <FontAwesomeIcon icon={faGooglePlay} size="3x"/>
                                <FontAwesomeIcon icon={faSpotify} size="3x"/>
                                <FontAwesomeIcon icon={faItunes} size="3x"/> */}
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
                    </div>
                    <div className="banner-buy">
                        <div className="buy-content">
                            <h1>Buy Album</h1>
                        </div>
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