import React, {Component} from 'react'
import axios from 'axios'
import './Contact.css'

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }

    sendEmail(){
        if(this.state.name && this.state.email && this.state.text){
            axios.post('/api/sendEmail',{email:this.state.email, name: this.state.name, text: this.state.text})
        }
        this.setState({
            name: '',
            email: '',
            text: ''
        })
    }
    handleName(input){
        this.setState({
            name: input
        })
    }
    handleEmail(input){
        this.setState({
            email: input
        })
    }
    handleText(input){
        this.setState({
            text: input
        })
    }

    render(){
        return (
            <div className="contact-main">
                <div>
                    <h2 className="page-header">Contact Us</h2>
                </div>
                <div className="contact-background">
                    <div className="contact-form">
                        <input placeholder="name" value={this.state.name} onChange={(e)=>{this.handleName(e.target.value)}}/>
                        <input placeholder="email" value={this.state.email} onChange={(e)=>{this.handleEmail(e.target.value)}}/>
                        <textarea rows="8" placeholder="message" value={this.state.text} onChange={(e)=>{this.handleText(e.target.value)}}/>
                        <button onClick={()=>{this.sendEmail()}}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact