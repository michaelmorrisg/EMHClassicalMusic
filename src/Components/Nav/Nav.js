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


    render(){
        return(
            <div className="nav-main">
                <div className="nav-content">
                    <ul className="nav-left">
                        <Link to="/"><li>Home</li></Link>
                        <li><a href="https://emhclassicalmusic.bandcamp.com/">Buy Albums</a></li>
                        <li className="mouse" onMouseEnter={()=>this.setState({expanded: true})} onMouseLeave={()=>this.setState({expanded: false})}>Streaming</li>
                        <div className={this.state.expanded ? "streaming showing" : ' streaming hidden'} onMouseEnter={()=>this.setState({expanded: true})} onMouseLeave={()=>this.setState({expanded: false})}>
                            <ul>
                                <li>Spotify</li>
                                <li>Apple Music</li>
                                <li>Google Play</li>
                                <li>Something Else</li>
                            </ul>
                        </div>
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