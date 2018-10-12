import React, {Component} from 'react'
import './About.css'

class About extends Component{

    render(){
        window.pintrk('track', 'pagevisit');
        return(
            <div className="about-main">
                <div className="about-content">
                <h1 className="page-header">About</h1>
                <p>
                    EMH Classical Music was created with the belief that there could be better recordings of the world’s classical music. Creator Ted Hinckley has two decades of experience as a music producer, editor and scoring supervisor working on more than 100 full-length feature films as well as 20 IMAX productions. We have taken the techniques of modern film scoring and applied them to classical music.
                </p>
                <p>
                    The result is a collection of over 250 cuts — more than 1000 minutes in all — featuring the great classical works such as Vivaldi’s Four Seasons, Tchaikovsky’s 1812 Overture, Mozart’s Eine Kleine Nachtmusik, and Symphony 40 as well as excerpts from Dvorak’s New World Symphony and Handel’s Messiah, just to name a few.
                </p>
                <p>
                    These productions include pieces performed by full orchestras, choir and orchestra, chamber orchestras, string ensembles, string quartets, piano and harpsichord.
                </p>
                <p>
                There is also an entire album of organ music recorded in Prague’s world famous Rudolfinum Dvorak Concert Hall, featuring classics such as Bach’s Toccata and Fugue in D Minor.
                </p>
                <p>
                Certain recordings that include choir will be available in a “no-vocal” instrumental mix, which is a very unique feature in the classical recording world.
                </p>
                <p>
                EMH Classical Music is adding brand new recordings all the time. It is our goal to make the best new recordings of classical music. We function as a classical music record label and a classical music library represented worldwide via licensing powerhouse Warner/Chappell Production Music.
                </p>
                <p>
                For more information, contact Ted Hinckley at ted@emhclassicalmusic.com or 310-489-8964.
                </p>
                </div>
            </div>
        )
    }
}
export default About