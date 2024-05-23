import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Compatibility.css'
import { NavLink } from 'react-router-dom'

//images
import Aries2 from '../assets/images/Aries2.jpg'
import Taurus2 from '../assets/images/Taurus2.jpg'
import Gemini2 from '../assets/images/Gemini2.jpg'
import Cancer2 from '../assets/images/Cancer2.jpg'
import Leo2 from '../assets/images/Leo2.jpg'
import Virgo2 from '../assets/images/Virgo2.jpg'
import Libra2 from '../assets/images/Libra2.jpg'
import Scorpio2 from '../assets/images/Scorpio2.jpg'
import Sagittarius2 from '../assets/images/Sagittarius2.jpg'
import Capricorn2 from '../assets/images/Capricorn2.jpg'
import Aquarius2 from '../assets/images/Aquarius2.jpg'
import Pisces2 from '../assets/images/Pisces2.jpg'
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
          <NavLink to='/Aries'><img src={Aries2} alt="" /><h2>Aries</h2></NavLink>
          <NavLink to='/Taurus'><img src={Taurus2} alt="" /><h2>Taurus</h2></NavLink>
          <NavLink to='/Gemini'><img src={Gemini2} alt="" /><h2>Gemini</h2></NavLink>
          <NavLink to='/Cancer'><img src={Cancer2} alt="" /><h2>Cancer</h2></NavLink>
          <NavLink to='/Leo'><img src={Leo2} alt="" /><h2>Leo</h2></NavLink>
          <NavLink to='/Virgo'><img src={Virgo2} alt="" /><h2>Virgo</h2></NavLink>
          <NavLink to='/Libra'><img src={Libra2} alt="" /><h2>Libra</h2></NavLink>
          <NavLink to='/Scorpio'><img src={Scorpio2} alt="" /><h2>Scorpio</h2></NavLink>
          <NavLink to='/Sagittarius'><img src={Sagittarius2} alt="" /><h2>Sagittarius</h2></NavLink>
          <NavLink to='/Capricorn'><img src={Capricorn2} alt="" /><h2>Capricorn</h2></NavLink>
          <NavLink to='/Aquarius'><img src={Aquarius2} alt="" /><h2>Aquarius</h2></NavLink>
          <NavLink to='/Pisces'><img src={Pisces2} alt="" /><h2>Pisces</h2></NavLink>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Compatibility