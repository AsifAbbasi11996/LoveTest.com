import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../assets/css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [inputName, setInputName] = useState('')
    const [inputPartnerName, setInputPartnerName] = useState('')


    const navigateToDisplay = useNavigate();

    const handleSubmit = () => {
        if (inputName === '' && inputPartnerName === '') {
            alert('Please fill all the fields')
        } else {
            navigateToDisplay('/OriginalLoveTest', { state: { inputName, inputPartnerName } });
        }
    };

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
                        <input type="text" placeholder='Enter Your Name' value={inputName} onChange={(e) => setInputName(e.target.value)} /><br></br>
                        <label htmlFor="">Your Partner :</label>
                        <input type="text" placeholder='Enter Your Partner Name' value={inputPartnerName} onChange={(e) => setInputPartnerName(e.target.value)} />
                    </div>

                    <div className="btn">
                        <button onClick={handleSubmit}>Continue</button>
                    </div>
                </div>

                <div className="boxes box-first-row">
                    <div className="box1 box">
                        <h1><NavLink to='/LoveThermometer'>LoveTest Thermometer</NavLink></h1>
                        <p>Enter the LoveTest Thermometer and get a rating about your relationships. This is a similar system like the other popular love calculators on the Internet. However we take it a step further and let you analyze various aspects of your relationship. Find out about the meaning of your name!</p>

                        <button><NavLink to='/LoveThermometer'>LoveTest Thermometer</NavLink></button>
                    </div>

                    <div className="box2 box">
                        <h1><NavLink to='/NumerologyAnalysis'>Numerology LoveTest</NavLink></h1>
                        <p>Take the Numerology LoveTest to get a compatibility score for up to 5 partners. If you can't decide which partner is the right one, then you should take this test.</p>

                        <button><NavLink to='/NumerologyAnalysis'>Numerology LoveTest</NavLink></button>
                    </div>

                    <div className="box3 box">
                        <h1><NavLink to='/QuizCentral'>Quiz Central</NavLink></h1>
                        <p>There are plenty of personality quizzes and love tests in our quiz central. More quizzes will be added soon. Come back often for the latest quizzes!</p>

                        <button><NavLink to='/QuizCentral'>Quiz Central</NavLink></button>
                    </div>
                </div>

                <div className="boxes box-second-row">
                    <div className="box1 box">
                        <h1><NavLink to='/Compatibility'>Compatibility Analysis</NavLink></h1>
                        <p>You've asked for it and now it's here! The fast and personal astro compatibility analysis. Enter your birthday and your dream partner's date of birth to find out how compatible you really are. We've added new videos to the analysis.</p>

                        <button><NavLink to='/Compatibility'>Compatibility Analysis</NavLink></button>
                    </div>
                    <div className="box3 box">
                        <h1><NavLink to='/LoveFortune'>Love Test Fortune Teller</NavLink></h1>
                        <p>Need a look into the future? The Love Test Fortune Teller might be the solution for you...</p>

                        <button><NavLink to='/LoveFortune'>Fortune Teller</NavLink></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home