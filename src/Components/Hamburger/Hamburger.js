import React, {Component} from 'react'
import './Hamburger.css'

class Hamburger extends Component {

    render(props){
        return (
            <div onClick={()=>this.props.toggleMenu()} className={this.props.openMenu ? "hamburger-main small" : "hamburger-main"}>
                <div><div className={this.props.openMenu ? " topburger-left hamburger-sub" : "hamburger-sub"}></div><div className={this.props.openMenu ? " topburger-right hamburger-sub" : "hamburger-sub"}></div></div>
                <div className={this.props.openMenu ? "shrinky" : 'nothing'}><div className={this.props.openMenu ? " middleburger-left hamburger-sub margin" : "hamburger-sub margin"}></div><div className={this.props.openMenu ? " middleburger-right hamburger-sub margin" : "hamburger-sub margin"}></div></div>
                <div><div className={this.props.openMenu ? " bottomburger-left hamburger-sub" : "hamburger-sub"}></div><div className={this.props.openMenu ? " bottomburger-right hamburger-sub" : "hamburger-sub"}></div></div>
            </div>
        )
    }
}
export default Hamburger