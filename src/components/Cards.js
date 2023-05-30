import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className='cards_container'>
                <div className='cards_wrappper'>
                    <ul className='cards_items'>
                        <CardItem
                            src='images/img_kyoto.png'
                            text='Feel the history of Japan'
                            label='History'
                            path='/creator'
                        />
                        <CardItem
                            src='images/img_fuji.png'
                            text='Explore the beautiful nature'
                            label='Nature'
                            path='/creator'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem
                            src='images/img_tokyo.png'
                            text='Explore the biggest city in the country'
                            label='City'
                            path='/creator'
                        />
                        <CardItem
                            src='images/img_anime.png'
                            text='For those who love Otaku culture'
                            label='Otaku'
                            path='/creator'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
