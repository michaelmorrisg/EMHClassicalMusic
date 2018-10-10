import React, {Component} from 'react'
import './NavMobile.css'
import {Link} from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'

class NavMobile extends Component{
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


    render(props){
        return(
            <div className="navmobile-main">
                <div className="navmobile-content">
                    <img id="navmobile-logo" src="http://emhclassicalmusic.com/wp-content/uploads/2018/06/EMH-new-logo_2.jpg" />
                    <Hamburger toggleMenu={this.props.toggleMenu} />
                </div>
            </div>
        )
    }
}
export default NavMobile