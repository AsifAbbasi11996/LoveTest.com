import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const LoveThermometer = () => {

    const [yourName, setYourName] = useState('');
    const [partnerName, setPartnerName] = useState('');

    const navigateToDisplay = useNavigate();

    const handleSubmit = () => {
        navigateToDisplay('/LoveThermometerResults', { state: { yourName, partnerName } });
    };


    return (
        <div>
            <Navbar />
            <div className="na-container">
                <video autoPlay loop muted src={homepagebgvideo}></video>
                <h1>Love Thermometer</h1>

                <p>The Love Thermometer analyzes various aspects of your relationship. You enter your name and the name of your partner and then you can choose different aspects to analyze.</p>

                <p>If you choose "All Aspects" then the combined average of all aspects will be shown. You can also select just one aspect to get the score for it.</p>

                <div className="form">
                    <form action="" method='post'>
                        <h2>Information About You :</h2><br />
                        <label htmlFor="">Full Name :</label>
                        <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} /><br /><br />

                        <label htmlFor="">Gender :</label>
                        <input type="radio" name='gender' id='male' />
                        &nbsp;&nbsp;
                        <label htmlFor="">Male</label>
                        <input type="radio" name='gender' id='female' />
                        &nbsp;&nbsp;
                        <label htmlFor="">Female</label><br /><br />

                        <label htmlFor="">Zodiac Sign :</label>
                        <select name="" id="">
                            <option value="">Select Your Zodiac Sign</option>
                            <option value="">Aries (21-03 to 20-04)</option>
                            <option value="">Taurus (21-04 to 21-05)</option>
                            <option value="">Gemini (22-05 to 21-06)</option>
                            <option value="">Cancer (22-06 to 23-07)</option>
                            <option value="">Leo (24-07 to 23-08)</option>
                            <option value="">Virgo (24-08 to 23-09)</option>
                            <option value="">Libra (24-09 to 23-10)</option>
                            <option value="">Scorpio (24-10 to 22-11)</option>
                            <option value="">Sagittarius (23-11 to 21-10)</option>
                            <option value="">Capricorn (22-12 to 20-01)</option>
                            <option value="">Aquarius (21-01 to 19-02)</option>
                            <option value="">Pisces (20-02 to 20-03)</option>
                        </select><br /><br />

                        <h2>About Your Dream Partner :</h2><br />
                        <label htmlFor="">Full Name :</label>
                        <input type="text" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} /><br /><br />

                        <label htmlFor="">Gender :</label>
                        <input type="radio" name='gender' id='male' />
                        &nbsp;&nbsp;
                        <label htmlFor="">Male</label>

                        <input type="radio" name='gender' id='female' />
                        &nbsp;&nbsp;
                        <label htmlFor="">Female</label><br /><br />

                        <label htmlFor="">Zodiac Sign :</label>
                        <select name="" id="">
                            <option value="">Select Your Zodiac Sign</option>
                            <option value="">Aries (21-03 to 20-04)</option>
                            <option value="">Taurus (21-04 to 21-05)</option>
                            <option value="">Gemini (22-05 to 21-06)</option>
                            <option value="">Cancer (22-06 to 23-07)</option>
                            <option value="">Leo (24-07 to 23-08)</option>
                            <option value="">Virgo (24-08 to 23-09)</option>
                            <option value="">Libra (24-09 to 23-10)</option>
                            <option value="">Scorpio (24-10 to 22-11)</option>
                            <option value="">Sagittarius (23-11 to 21-10)</option>
                            <option value="">Capricorn (22-12 to 20-01)</option>
                            <option value="">Aquarius (21-01 to 19-02)</option>
                            <option value="">Pisces (20-02 to 20-03)</option>
                        </select><br /><br />


                        <h2>Love Thermometer Options: </h2><br />
                        <label htmlFor="">How do you personally feel about your relationship?</label><br /><br />
                        <input type="radio" name='gender' id='female' />
                        &nbsp;&nbsp;
                        <label htmlFor=""> I'm not happy </label>

                        <input type="radio" name='gender' id='female' />
                        &nbsp;&nbsp;
                        <label htmlFor="">I'm happy</label>

                        <input type="radio" name='gender' id='female' />
                        &nbsp;&nbsp;
                        <label htmlFor="">I don't know</label><br /><br />

                        <label htmlFor="">Which aspect of your relationship would you like to analyze?</label><br /><br />
                        <select name="" id="">
                            <option value="">Love Compatibility</option>
                            <option value="">Friendship</option>
                            <option value="">Support</option>
                            <option value="">Lust</option>
                            <option value="">All aspects</option>
                        </select><br /><br />

                        <h2>Are You Ready ?</h2><br />
                        <button onClick={handleSubmit}><NavLink to='/LoveThermometerResults'>Continue</NavLink></button>
                    </form>
                </div>

                <p>Please Note:</p>
                <ul>
                    <li>Submit accurate information for best results.</li>
                    <li>This information will only be used to calculate the results and to display personalized information for you.</li>
                    <li>Your information will NOT be saved, stored or transferred to any 3rd parties.</li>
                    <li>Check the privacy policy at the bottom of the page if you have any questions.</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default LoveThermometer
