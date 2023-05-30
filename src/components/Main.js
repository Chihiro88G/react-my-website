import React from 'react'
import './Main.css'
import '../App.css'
import { Button } from './Button'

function Main() {
    return (
        <div className='main_container'>
            {/* <iframe src="https://www.youtube.com/embed/nCbHefA4CR8?autoplay=1&mute=1&loop=1&playlist=nCbHefA4CR8" title="Japan in 90 seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            <h1>VISIT JAPAN</h1>
            <p>Advanture Awaits!</p>
            <div className='main_btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER
                    <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Main;
