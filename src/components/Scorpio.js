import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Scorpio2 from '../assets/images/Scorpio2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Scorpio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='zodiac Scorpiocontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Scorpio</h1>
        <NavLink to='/Scorpio'><img src={Scorpio2} alt="" /><h2>Scorpio</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Scorpio Male</h2>
            <p>When it comes to lovemaking you are capable of attaining the highest level of passion. You are persuasive and will not admit defeat once you have your mind fixed on a particular female. You prefer to control your mates' emotions. Like everything else, you always give one hundred percent and of course you expect the same in return. To you sex is a competitive game, and revenge and jealousy are two of your characteristics that will surface if you aren't winning.</p>
          </div>

          <div className='female'>
            <h2 >Scorpio Female</h2>
            <p>You have no trouble attracting men. You dress for your mate and will use your seductive, hypnotic eyes to dazzle and captivate your chosen partner. You are the type of woman that has a tremendous animalistic energy that can lure and tantalize but you also have a temper that can be explosive. You are extremely demanding when it comes to the art of making love and you ack patience if your mate doesn't satisfy you. You will be loyal and true blue as long as you don't detect weakness in your lover.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate scorpio'>SCORPIO MATE</h2>
          <p>You have an all-or-nothing approach to relationships, therefore you do not match up to all the signs. Here's a look at how you do interact with others.</p>

          <h2>SCORPIO & ARIES</h2>
          <p>You make a hot combination in bed. Highly aggressive sex that could be described as implied violence. Lustful but not lasting due to your jealous nature.</p>

          <h2>SCORPIO & TAURUS</h2>
          <p>Polar opposites that actually do quite well together. The Bull is stable and loyal enough to satisfy your intense nature. You both value long-term unions and are willing to work at them together.</p>

          <h2>SCORPIO & GEMINI</h2>
          <p>This is not a likely match, the Illusive, fickle Gemini will drive you to distraction, which in turn could bring out your vengeful side.</p>

          <h2>SCORPIO & CANCER</h2>
          <p>This is one of your best connections. The Crab is a loyal mate who is usually willing to stand behind you. Cancers are attracted to your strong, demanding ways.</p>

          <h2>SCORPIO & LEO</h2>
          <p>This connection can lead to crimes of passion. Although you are strongly attracted to the Lion, Leo's flamboyant, flirtatious nature will cause anger that could erupt into murder-suicide.</p>

          <h2>SCORPIO & VIRGO</h2>
          <p>The Virgoan has difficulties with your sexual leanings. You will bore easily and move on to more passionate partners.</p>

          <h2>SCORPIO & LIBRA</h2>
          <p>This is not the best match. Libra is far too good looking and easy going for your jealous nature. You would likely end up spying on this social butterfly.</p>

          <h2>SCORPIO & SCORPIO</h2>
          <p>Sexually you are truly compatible, however out of the bedroom you are far too much alike -- creating problems and mind games. You will always think that the other is having an affair.</p>

          <h2>SCORPIO & SAGITTARIUS</h2>
          <p>This alliance is a waste of time for both parties. You are a homebody and the Archer is a travel nut. This is not a likely attraction.</p>

          <h2>SCORPIO & CAPRICORN</h2>
          <p>This is a wonderful partnership. You both have the same values and cherish your home environment. Mentally and physically you match up well, easily satisfying one anothers needs.</p>

          <h2>SCORPIO & AQUARIUS</h2>
          <p>Why bother. This will never work due to the Aquarian's need for freedom and your need to possess. Your values, ethics and approach to life are just too different.</p>

          <h2>SCORPIO & PISCES</h2>
          <p>This is not bad. Probably the most erotic sexual combination. The Fish is willing to be a part of your whims and desires, and that makes for a lasting union.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Scorpio
