import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faShoppingCart,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faPinterest,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

class Footer extends Component {
    render() {
        return (
            <div
                className={`footer-main ${
                    window.location.pathname.includes('tour-2022')
                        ? 'hidden'
                        : ''
                }`}
            >
                <div className="bandcamp">
                    <iframe
                        scrolling="no"
                        style={{
                            paddingLeft: '15px',
                            border: '0',
                            width: '100%',
                            height: '33px',
                        }}
                        src="https://bandcamp.com/band_follow_button_classic/3173216037"
                    ></iframe>
                </div>
                <div className="footer-center">
                    <p>
                        Copyright © {new Date().getFullYear()} EMH Classical
                        Music{' '}
                    </p>
                    <div className="icon-div">
                        <a href="https://www.facebook.com/EMHClassicalMusic/">
                            <FontAwesomeIcon
                                className="grow nav-icon"
                                icon={faFacebookSquare}
                                size="2x"
                                color="white"
                            />
                        </a>
                        <FontAwesomeIcon
                            className="grow nav-icon"
                            icon={faPinterest}
                            size="2x"
                            color="white"
                        />
                        <a href="https://www.youtube.com/user/EMHClassicalMusic">
                            <FontAwesomeIcon
                                className="grow nav-icon"
                                icon={faYoutube}
                                size="2x"
                                color="white"
                            />
                        </a>
                    </div>
                </div>
                <div className="footer-right"></div>
            </div>
        );
    }
}
export default Footer;
