import React from 'react'
import './Backdrop.css'

export default function Backdrop(props){

    return(
        <div onClick={()=>props.toggleMenu()} className={props.openMenu ? 'backdrop-showing backdrop': 'backdrop'}></div>
    )
}