import React, {Component} from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faPinterest, faYoutube} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

    render(){
        return(
            <div className="footer-main">
                <div>
                <p>Copyright © 2018 EMH Classical Music </p>
                <div className="icon-div">
                <a href="https://www.facebook.com/EMHClassicalMusic/"><FontAwesomeIcon className="grow nav-icon" icon={faFacebookSquare} size="2x" color='white'/></a>
                <FontAwesomeIcon className="grow nav-icon" icon={faPinterest} size="2x" color='white'/>
                <a href="https://www.youtube.com/user/EMHClassicalMusic"><FontAwesomeIcon className="grow nav-icon" icon={faYoutube} size="2x" color='white'/></a>
                </div>
                </div>
            </div>
        )
    }
}
export default Footer