import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='main-logo' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae sunt neque eveniet animi odit sint beatae esse earum nostrum debitis reprehenderit eos expedita laudantium! Earum?</p>
                    <div className="footer-socil-icon">
                        <a href="https://www.facebook.com/fastfoodinusa/" target="_blank"><img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://x.com/KapilCh95480" target="_blank"><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/ketan-chauhan-82056021a/" target="_blank"><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Private Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91XXXX87212</li>
                        <li>contact@fastfood.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 &#169; Fastfood.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
