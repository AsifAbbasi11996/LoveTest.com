import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const LoveFortune = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [yourName, setYourName] = useState('');


    const navigateToDisplay = useNavigate();

    const handleSubmit = () => {
        if (yourName === '') {
            alert('Please enter your name')
        } else {
            navigateToDisplay('/LoveFortuneTeller', { state: { yourName } });
        }
    };


    return (
        <div>
            <Navbar />
            <div className="na-container">
                <video autoPlay loop muted src={homepagebgvideo}></video>
                <h1>Love Fortune</h1>

                <p>Do you know yourself? If not, then take the fortune teller and find out. This is not really serious, but you might find some truth in it nonetheless.</p>

                <p>Okay, let's get started. Fill out the form below to get your questionnaire.</p>

                <div className="form">
                    <form action="" method='post'>
                        <h2>Information About You :</h2><br />
                        <label htmlFor="">Full Name :</label>
                        <input type="text" value={yourName}
                            onChange={(e) => setYourName(e.target.value)} required /><br /><br />

                        <label htmlFor="">Gender :</label>
                        <input type="radio" name='gender' id='male' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Male</label>
                        <input type="radio" name='gender' id='female' required />
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

                        <h2>Your Preferred Partner is :</h2><br />
                        <input type="radio" name='gender1' id='male' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Male</label>

                        <input type="radio" name='gender1' id='female' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Female</label><br /><br />

                        <h2>Are You Ready ?</h2><br />
                        <button onClick={handleSubmit}>Continue</button>
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

export default LoveFortune