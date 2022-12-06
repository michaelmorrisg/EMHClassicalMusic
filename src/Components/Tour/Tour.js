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
                <a>Kanab</a>
                <a onClick={() => console.log('nothin')}>Richfield</a>
                <a onClick={() => console.log('nothin')}>Helper</a>
                <a
                    href="/files/Sing_a_longs.pdf"
                    download={'Christmas Sing-a-longs'}
                >
                    Sing Along Lyrics
                </a>
            </div>
        </div>
    );
}
