import React, {Component} from 'react'
import './Hamburger.css'

class Hamburger extends Component {

    render(props){
        return (
            <div onClick={()=>this.props.toggleMenu()} className="hamburger-main">
                <div className="hamburger-sub"></div>
                <div className="hamburger-sub margin"></div>
                <div className="hamburger-sub"></div>
            </div>
        )
    }
}
export default Hamburger