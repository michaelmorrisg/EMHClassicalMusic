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
                {/* <a
                    href="/files/kanab_program.pdf"
                    download={'Kanab Concert Program'}
                >
                    Kanab
                </a>
                <a
                    href="/files/richfield_program.pdf"
                    download={'Richfield Concert Program'}
                >
                    Richfield
                </a> */}
                <a href="/files/2023_program.pdf" download={'Concert Program'}>
                    Concert Program
                </a>
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
