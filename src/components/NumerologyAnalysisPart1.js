import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import heart from '../assets/images/heart.png'


const NumerologyAnalysisPart1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  const { yourName, firstPerson, secondPerson, thirdPerson, randomNumber1, randomNumber2, randomNumber3 } = location.state || { yourName: '', firstPerson: '', secondPerson: '', thirdPerson: '' }

  return (
    <>
      <Navbar />
      <div className="numerology-container ogtestpart1-container">
        <h1>Love Test Numerology</h1>
        <p>para</p>
        <h2>{yourName} <img src={heart} alt="" /> {firstPerson}</h2>
        <h2>{randomNumber1} %</h2>
        <p>zodiac sign</p>
        <p>zodiac sign</p>

        <h2>{yourName} <img src={heart} alt="" /> {secondPerson}</h2>
        <h2>{randomNumber2} %</h2>
        <p>zodiac sign</p>
        <p>zodiac sign</p>

        <h2>{yourName} <img src={heart} alt="" /> {thirdPerson}</h2>
        <h2>{randomNumber3} %</h2>
        <p>zodiac sign</p>
        <p>zodiac sign</p>


      </div>
      <Footer />
    </>
  )
}

export default NumerologyAnalysisPart1
