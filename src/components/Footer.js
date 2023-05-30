import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer_container'>
            <section className='footer_subscription'>
                <p className='footer_subscription_heading'>
                    News Letter
                </p>
                <div className='input_areas'>
                    <form>
                        <input className='footer_input' type='email' placeholder='Your Email' name='email'></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer_links'>
                <div className='footer_link_wrapper'>
                    <div className='footer_link_items'>
                        <h2>About Us</h2>
                        <Link to='/author'>Author</Link>
                        <Link to='/feedback'>Feedback</Link>
                    </div>
                    <div className='footer_link_items'>
                        <h2>Destinations</h2>
                        <Link to='/'>History</Link>
                        <Link to='/'>Nature</Link>
                        <Link to='/'>City</Link>
                        <Link to='/'>Otaku</Link>
                    </div>
                    <div className='footer_link_items'>
                        <h2>More</h2>
                        <Link to='/'><i className='fab fa-linkedin' /></Link>
                        <Link to='/'><i className='fab fa-github' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
