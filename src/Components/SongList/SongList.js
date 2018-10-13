import React, {Component} from 'react'
// import threeKings from '../../Assets/threeKings.mp3'
// import moldau from '../../Assets/moldau.mp3'
// import carmen from '../../Assets/carmen.mp3'
import './SongList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPlay, faPause)

class SongList extends Component {
    constructor(){
        super()
        this.state = {
            songOne: false,
            songTwo: false,
            songThree: false
        }

        // this.threeKings = threeKings
        // this.threeKingsAudio = new Audio(this.threeKings)
        // this.moldau = moldau
        // this.moldauAudio = new Audio(this.moldau)
        // this.carmen = carmen
        // this.carmenAudio = new Audio(this.carmen)
    }
    playSongOne(){
        if(!this.threeKingsAudio){
            console.log('loading')
        this.threeKingsAudio = new Audio('/api/firstsong')
        }
        this.setState({
            songTwo: false,
            songThree: false,
            songOne: !this.state.songOne
        })
        console.log('done loading')
    }
    playSongTwo(){
        if(!this.moldauAudio){
            this.moldauAudio = new Audio('/api/secondsong')
        }
        this.setState({
            songOne: false,
            songThree: false,
            songTwo: !this.state.songTwo
        })
    }
    playSongThree(){
        if(!this.carmenAudio){
            this.carmenAudio = new Audio('/api/thirdsong')
        }
        this.setState({
            songTwo: false,
            songOne: false,
            songThree: !this.state.songThree
        })
    }

    render(){
        if(this.threeKingsAudio){this.state.songOne ? this.threeKingsAudio.play() : this.threeKingsAudio.pause()}
        if(this.moldauAudio){this.state.songTwo ? this.moldauAudio.play() : this.moldauAudio.pause()}
        if(this.carmenAudio){this.state.songThree ? this.carmenAudio.play() : this.carmenAudio.pause()}
        return (
            <div className="song-main">
                <div>
                    <div className="play-button" onClick={()=>this.playSongOne()}>{!this.state.songOne ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                    <p>We Three Kings</p>
                    <p className="italic">Christmas a la Vivaldi</p>
                </div>
                <div>
                    <div className="play-button" onClick={()=>this.playSongTwo()}>{!this.state.songTwo ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                    <p>Ma Vlast: Moldau</p>
                    <p className="italic">A Trip To Prague</p>
                </div>
                <div>
                    <div className="play-button" onClick={()=>this.playSongThree()}>{!this.state.songThree ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                    <p>Carmen Overture</p>
                    <p className="italic">Epic Orchestra</p>
                </div>
            </div>
        )
    }
}
export default SongList