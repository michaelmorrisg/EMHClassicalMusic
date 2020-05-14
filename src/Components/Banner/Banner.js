import React, {Component} from 'react'
import "./Banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerLeft from '../BannerLeft/BannerLeft'
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
                    <BannerLeft />
                <div className="banner-right">
                    <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false} transitionTime={0} interval={4000}>
                    <div id='zero'>

                    </div>
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