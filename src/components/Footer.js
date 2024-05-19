import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <footer>
            <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            <div className="footer-container">
                <div className="flex">
                    <div className="first">
                        <h3>Our Content</h3>
                        <ul>
                            <li><NavLink to='/OriginalLoveTest'>Original Love Test</NavLink></li>
                            <li><NavLink to='/Compatibility'>Compatibility Analysis</NavLink></li>
                            <li><NavLink to='/QuizCentralPage'>Quiz Central</NavLink></li>
                        </ul>
                    </div>
                    <div className="second">
                        <h3>Love Test.com</h3>
                        <ul>
                            <li><NavLink to='/AboutPage'>About LoveTest</NavLink></li>
                            <li><NavLink to='/Contact'>Contact</NavLink></li>
                            <li><NavLink>Copyright</NavLink></li>
                            <li><NavLink>Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="third">
                        <div className="social-media">
                            <h3>Follow us</h3>
                            <NavLink><i class="ri-facebook-fill"></i></NavLink>
                            <NavLink><i class="ri-instagram-fill"></i></NavLink>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>Privacy Guarantee: LoveTest.com is completely anonymous, private and secure: no personal data is saved or stored.</p>
                    <p>Copyright, © 1996-2024 | LoveTest is a trademark of Euregio.Net AG | For entertainment purposes only | Sitemap</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer