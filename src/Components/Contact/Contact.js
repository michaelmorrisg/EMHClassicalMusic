import React, {Component} from 'react'
import axios from 'axios'

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
            <div>
                <input placeholder="name" value={this.state.name} onChange={(e)=>{this.handleName(e.target.value)}}/>
                <input placeholder="email" value={this.state.email} onChange={(e)=>{this.handleEmail(e.target.value)}}/>
                <textarea placeholder="message" value={this.state.text} onChange={(e)=>{this.handleText(e.target.value)}}/>
                <button onClick={()=>{this.sendEmail()}}>Send</button>
            </div>
        )
    }
}
export default Contact