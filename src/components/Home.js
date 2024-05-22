import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <video autoPlay loop muted src={homepagebgvideo}></video>
                <div className="heading">
                    <h1>The Original Internet Love Test</h1>
                </div>

                <div className="para">
                    <p>Free love tests and personality quizzes, online since 23rd February 1996 - 26 years!</p>
                    <p>Completely anonymous, private and secure: no personal data is saved or stored.</p>
                </div>

                <div className="first-box">
                    <h1><NavLink to='/OriginalLoveTest'>The Free Internet Love Tester</NavLink></h1>
                    <p>Get advice based on the 40 answers to this lovetest. It also calculates the compatibility between you and your sweetheart using numerology based on the names that were entered. The Love Test also provides astrological compatibility information about the selected zodiac signs. Now gives you the meaning of your name as well!</p>

                    <div className="input">
                        <label htmlFor="">Your Name :</label>
                        <input type="text" placeholder='Enter Your Name' /><br></br>
                        <label htmlFor="">Your Partner :</label>
                        <input type="text" placeholder='Enter Your Partner Name' />
                    </div>

                    <div className="btn">
                        <button>Continue..</button>
                    </div>
                </div>

                <div className="boxes box-first-row">
                    <div className="box1 box">
                        <h1>LoveTest Thermometer</h1>
                        <p>Enter the LoveTest Thermometer and get a rating about your relationships. This is a similar system like the other popular love calculators on the Internet. However we take it a step further and let you analyze various aspects of your relationship. Find out about the meaning of your name!</p>

                        <button>LoveTest Thermometer</button>
                    </div>

                    <div className="box2 box">
                        <h1>Numerology LoveTest</h1>
                        <p>Take the Numerology LoveTest to get a compatibility score for up to 5 partners. If you can't decide which partner is the right one, then you should take this test.</p>

                        <button>Numerology LoveTest</button>
                    </div>

                    <div className="box3 box">
                        <h1>Quiz Central</h1>
                        <p>There are plenty of personality quizzes and love tests in our quiz central. More quizzes will be added soon. Come back often for the latest quizzes!</p>

                        <button>Quiz Central</button>
                    </div>
                </div>

                <div className="boxes box-second-row">
                    <div className="box1 box">
                        <h1>Compatibility Analysis</h1>
                        <p>You've asked for it and now it's here! The fast and personal astro compatibility analysis. Enter your birthday and your dream partner's date of birth to find out how compatible you really are. We've added new videos to the analysis.</p>

                        <button>Compatibility Analysis</button>
                    </div>
                    <div className="box2 box">
                        <h1>Quick Love Calculator</h1>
                        <p>Calculate your love compatibility for up to 3 names at the same time... We'll show you a graph how compatibile you are with each of your 3 secret sweethearts. The results are private and only shown to your eyes. We do not keep a record of the names you enter into this love test.</p>

                        <button>Love Calculator</button>
                    </div>
                    <div className="box3 box">
                        <h1>Love Test Fortune Teller</h1>
                        <p>Need a look into the future? The Love Test Fortune Teller might be the solution for you...</p>

                        <button>Fortune Teller</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home