import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/OriginalLoveTest.css'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'


const OriginalLoveTest = () => {

 const location = useLocation();
  
  const navigateToDisplay = useNavigate();

  const handleSubmit = () => {
    navigateToDisplay('/OriginalLoveTestPart1', { state: { yourName, partnerName } });
  };

  const { inputName, inputPartnerName } = location.state || {inputName: '', inputPartnerName: ''}

  const [yourName, setYourName] = useState(inputName);
  const [partnerName, setPartnerName] = useState(inputPartnerName);

  return (
    <div>
      <Navbar />
      <div className="oglovetest-container">
        <video autoPlay loop muted src={homepagebgvideo}></video>
        <div className="left-container">
          <div className="heading">
            <h1>Original Internet Love Test</h1>
          </div>

          <div className="para">
            <p>Get personal advice based on the answers to this test. It also calculates the compatibility between you and your heartthrob using numerology based on the names that were entered.</p>

            <p>The LoveTest also provides astrological compatibility information about the selected zodiac signs.</p>

            <p>Before you can start the tests, we need to know a bit more about you to personalize the questions. Please fill in these items and make your selection in the menus.</p>

            <p>Okay, let's get started. Fill out the form below to get your questionnaire.</p>
          </div>

          <div className="form">
            <form>
              <h2>Information About You :</h2>
              <label htmlFor="">Full Name :</label>
              <input type="text" value={yourName}
                onChange={(e) => setYourName(e.target.value)} /><br />

              <label htmlFor="">Gender :</label>
              <input type="radio" name='gender' id='male' />
              &nbsp;&nbsp;
              <label htmlFor="">Male</label>
              <input type="radio" name='gender' id='female' />
              &nbsp;&nbsp;
              <label htmlFor="">Female</label><br />

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
              </select>

              <h2>About Your Dream Partner :</h2>
              <label htmlFor="">Full Name :</label>
              <input type="text" value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)} /><br />

              <label htmlFor="">Gender :</label>
              <input type="radio" name='gender1' id='male' />
              &nbsp;&nbsp;
              <label htmlFor="">Male</label>

              <input type="radio" name='gender1' id='female' />
              &nbsp;&nbsp;
              <label htmlFor="">Female</label><br />

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
              </select>

              <h2>Are You Ready ?</h2>
              <button onClick={handleSubmit}><NavLink to='/OriginalLoveTestPart1'>Continue</NavLink></button>
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
      </div>
      <Footer />
    </div>
  )
}

export default OriginalLoveTest