import React, { Component } from 'react';
import './Tour.css';
export default function Tour() {
    return (
        <div className="tour-main">
            <div className="image-wrapper">
                <img
                    className="christmas-image"
                    src={require('../../Assets/christmas_ala_vivaldi.png')}
                />
                <img
                    className="christmas-image-sub"
                    src={require('../../Assets/christmas_sub.png')}
                />
            </div>
            <div className="button-wrapper">
                <button onClick={() => console.log('nothin')}>Kanab</button>
                <button onClick={() => console.log('nothin')}>Richfield</button>
                <button onClick={() => console.log('nothin')}>Helper</button>
                <button onClick={() => console.log('nothin')}>
                    Sing Along Lyrics
                </button>
            </div>
        </div>
    );
}
