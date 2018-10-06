import React, {Component} from 'react'
import song from '../../Assets/song.mp3'
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

        this.testSong = song
        this.songAudio = new Audio(this.testSong)
    }
    playSongOne(){
        this.setState({
            songTwo: false,
            songThree: false,
            songOne: !this.state.songOne
        })
    }
    playSongTwo(){
        this.setState({
            songOne: false,
            songThree: false,
            songTwo: !this.state.songTwo
        })
    }
    playSongThree(){
        this.setState({
            songTwo: false,
            songOne: false,
            songThree: !this.state.songThree
        })
    }

    render(){
        this.state.songOne ? this.songAudio.play() : this.songAudio.pause()
        return (
            <div className="song-main">
                <div>
                    <p>We Three Kings</p>
                    <p>Christmas a la Vivaldi</p>
                    <div className="play-button" onClick={()=>this.playSongOne()}>{!this.state.songOne ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                </div>
                <div>
                    <p>Ma Vlast: Moldu</p>
                    <p>A Trip To Prague</p>
                    <div className="play-button" onClick={()=>this.playSongTwo()}>{!this.state.songTwo ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                </div>
                <div>
                    <p>Carmen Overture</p>
                    <p>Epic Orchestra</p>
                    <div className="play-button" onClick={()=>this.playSongThree()}>{!this.state.songThree ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
                </div>
            </div>
        )
    }
}
export default SongList