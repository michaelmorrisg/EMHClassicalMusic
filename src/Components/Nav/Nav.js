import React, {Component} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component{


    render(){
        return(
            <div className="nav-main">
                <div className="nav-content">
                    <ul className="nav-left">
                        <Link to="/"><li>Home</li></Link>
                        <li><a href="https://emhclassicalmusic.bandcamp.com/">Buy Albums</a></li>
                        <li>Streaming</li>
                    </ul>
                    <img id="nav-logo" src="http://emhclassicalmusic.com/wp-content/uploads/2018/06/EMH-new-logo_2.jpg" />
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