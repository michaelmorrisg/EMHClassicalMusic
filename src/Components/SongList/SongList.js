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
            songOne: false
        }

        this.testSong = song
        this.songAudio = new Audio(this.testSong)
    }
    playSong(){
        this.setState({
            songOne: !this.state.songOne
        })
    }

    render(){
        this.state.songOne ? this.songAudio.play() : this.songAudio.pause()
        return (
            <div>
            <div>
        <div className="play-button" onClick={()=>this.playSong()}>{!this.state.songOne ? <FontAwesomeIcon icon={faPlay} size="2x" color='black'/> : <FontAwesomeIcon icon={faPause} size="2x" color='black'/> }</div>
            </div>
            </div>
        )
    }
}
export default SongList