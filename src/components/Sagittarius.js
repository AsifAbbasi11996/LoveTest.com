import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Sagittarius2 from '../assets/images/Sagittarius2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Sagittarius = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='zodiac Sagittariuscontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Sagittarius</h1>
        <NavLink to='/Sagittarius'><img src={Sagittarius2} alt="" /><h2>Sagittarius</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Sagittarius Male</h2>
            <p>You love women, however you usually find it difficult to be happy with just one. You are wary of commitment and not prone to close involvement's. You need to be free and detest jealousy in women. You prefer women with experience, females that will take love as lightly as you do. You insist that your mate has a sense of humor because you can become depressed easily with partners that are too serious and who tend to talk about themselves. You enjoy making love under the light of the moon and you just hate to feel or be confined at any time. You can be blunt and outspoken. You will never restrict your partner in any way shape or form regardless of the end result. You have an insatiable curiosity about sexual education and you want to experience everything. You will remain a bachelor at heart whether you marry or not.</p>
          </div>

          <div className='female'>
            <h2 >Sagittarius Female</h2>
            <p>You are impulsive and have an easy-going approach to sex. You have the innate ability to remain on friendly terms with your ex-lovers. You are philosophical and rarely get too upset when a bed mate moves on. You simply rationalize that there will be a new love in your life shortly. You are good-natured, straightforward and generous. You love your freedom and must be allowed to travel. You will not be happy if forced to settle in one place and your residence will rarely look established. You quickly move on from a man, job or living quarters if you don't find yourself being stimulated anymore. You honestly bewilder men.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate sagittarius'>SAGITTARIUS MATE</h2>
          <p>You do much better when it comes to friendships then you do in love relationships. Here's a look at how you do match up to other signs.</p>

          <h2>SAGITTARIUS & ARIES</h2>
          <p>This is not a bad match while it lasts. Fun-loving, adventuresome, certainly compatible. Both you and the Ram like to do your own thing, therefore you often part on friendly terms as you go off in your own directions. </p>

          <h2>SAGITTARIUS & TAURUS</h2>
          <p> The Bull leads too structured a life for you to conform to. This is not a likely match. Taureans see you as a wanderer with no apparent direction.</p>

          <h2>SAGITTARIUS & Gemini</h2>
          <p>  You are polar opposites giving this connection plenty of chemistry, however outside activities tend to take you both in different directions. You both like to take chances and depend too much on luck. </p>

          <h2>SAGITTARIUS & CANCER</h2>
          <p>  You are a traveler and the Crab is a homebody that automatically puts you on a different wave length. This combination makes a much better friendship. You could never live within the other's life-style and remain happy. </p>

          <h2>SAGITTARIUS & LEO</h2>
          <p>This is probably one of your best match ups. You bring out the best in one another. You both have a very carefree approach to life and love.</p>

          <h2>SAGITTARIUS & VIRGO</h2>
          <p>Virgo's do not handle your lifestyle well. You can not put up with the Virgoan's meticulous, detailed way of doing everything.

          </p>

          <h2>SAGITTARIUS & LIBRA</h2>
          <p>This is probably one of your best connections. You get the freedom you desire and both of you absolutely hate confrontation, therefore problems are just put on the shelf.</p>

          <h2>SAGITTARIUS & SCORPIO</h2>
          <p>The Scorpion cannot live with your freedom loving wandering spirit. When the jealousy sets in you'll be off to greener pastures.</p>

          <h2>SAGITTARIUS & SAGITTARIUS</h2>
          <p> You will shake well with one another. This combination is somewhat unpredictable. It's not always a lasting union due to a lack of being in the same place at the same time, but truly a hot affair. </p>

          <h2>SAGITTARIUS & CAPRICORN</h2>
          <p>You are impulsive, risk-taking and always looking for adventure that frightens the cautious Goat. This is really not a suitable union, You are far too different to ever exist together. </p>

          <h2>SAGITTARIUS & AQUARIUS</h2>
          <p>You both love adventure, travel and the great outdoors. You can have a lasting relationship, especially if it is a long distance romance.</p>

          <h2>SAGITTARIUS & PISCES</h2>
          <p> This is a passionate attraction, but unfortunately neither one of you can supply the other with the emotional factor required to make this coalition work.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sagittarius
