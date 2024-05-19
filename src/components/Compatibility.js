import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Compatibility.css'
import { NavLink } from 'react-router-dom'

//images
import Aries2 from '../assets/images/ARIES2.png'
import Taurus2 from '../assets/images/Taurus2.png'
import Gemini2 from '../assets/images/Gemini2.png'
import Cancer2 from '../assets/images/Cancer2.png'
import Leo2 from '../assets/images/Leo2.png'
import Virgo2 from '../assets/images/Virgo2.png'
import Libra2 from '../assets/images/Libra2.png'
import Scorpio2 from '../assets/images/Scorpio2.png'
import Sagittarius2 from '../assets/images/Sagittarius2.png'
import Capricorn2 from '../assets/images/Capricorn2.png'
import Aquarius2 from '../assets/images/Aquarius2.png'
import Pisces2 from '../assets/images/Pisces2.png'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Compatibility = () => {
  return (
    <div>
      <Navbar />
      <div className="compatibility-container">
        <video autoPlay loop muted src={astrologerbgvideo} ></video>
        <h1>Love and Compatibility Information for Your Zodiac Sign</h1>

        <p>Check out your sign to find out what kind of lover you are and if your partner's sign is compatible with you.</p>

        <div className="images">
          <NavLink to='/Aries'><img src={Aries2} alt="" /></NavLink>
          <NavLink to='/Taurus'><img src={Taurus2} alt="" /></NavLink>
          <NavLink to='/Gemini'><img src={Gemini2} alt="" /></NavLink>
          <NavLink to='/Cancer'><img src={Cancer2} alt="" /></NavLink>
          <NavLink to='/Leo'><img src={Leo2} alt="" /></NavLink>
          <NavLink to='/Virgo'><img src={Virgo2} alt="" /></NavLink>
          <NavLink to='/Libra'><img src={Libra2} alt="" /></NavLink>
          <NavLink to='/Scorpio'><img src={Scorpio2} alt="" /></NavLink>
          <NavLink to='/Sagittarius'><img src={Sagittarius2} alt="" /></NavLink>
          <NavLink to='/Capricorn'><img src={Capricorn2} alt="" /></NavLink>
          <NavLink to='/Aquarius'><img src={Aquarius2} alt="" /></NavLink>
          <NavLink to='/Pisces'><img src={Pisces2} alt="" /></NavLink>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Compatibility