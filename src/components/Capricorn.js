import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Capricorn2 from '../assets/images/Capricorn2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Capricorn = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='zodiac Capricorncontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Capricorn</h1>
        <NavLink to='/Capricorn'><img src={Capricorn2} alt="" /><h2>Capricorn</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2>Capricorn Male</h2>
            <p>When it comes to sensuality you are probably the most persistent of all the signs. You will not take no for an answer. You will break down the resistance of whomever you pursue and you'll never go away empty handed. Love is a necessity in your mind. Your animal tendencies come out in the bedroom. You are not a cruel lover, just energetic and lustful. You prefer younger, naive women and you enjoy playing the role of the bedroom teacher. Unlike most men, when you become an old Goat you still have a strong sex drive and will continue to pursue younger mates. You do expect your woman to serve you, not only in the bedroom but where the traditional domestic chores are concerned. You want your partner to be a loyal friend, but will never accept her criticism. You will actively seek love through physical passion rather than being lovable.</p>

          </div>

          <div className='female'>
            <h2>Capricorn Female</h2>
            <p>You tend to attract weak men. You are not easy to figure out and you have a tendency to turn on and off frequently. In actuality you are the type of female who is afraid of falling in love with the wrong person. When you do find Mr. Right you will be a true blue partner with powerful emotions. You will do anything for your lover, however he must satisfy all your needs. You like to keep busy and you take life quite seriously. You also take excellent care of yourself. You dress with class, your neat, clean and somewhat formal. You love to be complimented by the man in your life.</p>

          </div>




        </div>
        <div className='mate'>
          <h2 className='zodiac-mate capricorn'>CAPRICORN MATE</h2>
          <p>When it comes to compatible mates, You can compliment a number of different signs.
          </p>
          <h2>CAPRICORN & ARIES</h2>
          <p>  You are both far too independent to get along for any length of time. Although there is an attraction and mutual respect, arguments will make this union impossible.</p>

          <h2>CAPRICORN  & TAURUS</h2>
          <p>You both have the same regard for quality and money. This is almost a match made in heaven. Sexually adequate and certainly a long lasting alliance.</p>

          <h2>CAPRICORN & GEMINI</h2>
          <p>  Forget it -- the flirtatious, fun-loving Twin will not impress you. To you, Gemini's are irresponsible and unworthy of your dedication. </p>

          <h2>CAPRICORN  & CANCER</h2>
          <p>  You are polar opposites that do quite well together. You feed each other exactly what's needed. Security from you and loyalty and trust from the Crab. </p>

          <h2>CAPRICORN  & CEO</h2>
          <p> The extravagant Lion will disgust you. You hate wasteful, flamboyant individuals. Although sexually you are compatible this combination is best as a one night stand.</p>

          <h2>CAPRICORN  & VIRGO</h2>
          <p> This is a very good mental connection, nevertheless not the most sexually oriented combination.

          </p>

          <h2>CAPRICORN  & LIBRA</h2>
          <p>You will be mesmerized by the sophisticated Libran, but that is about as far as this amalgamation will go. You will also tire of the lazy Libran's ways</p>

          <h2>CAPRICORN  & SCORPIO</h2>
          <p>Not bad at all. You both understand one another perfectly and can appreciate the same values and directions. Sexually you can dance superbly together.</p>

          <h2>CAPRICORN  & SAGITTARIUS</h2>
          <p> You are far too different in your likes and dislikes. The adventurous risk-taking Archer finds you boring due to your cautious, routine nature. </p>

          <h2>CAPRICORN  & CAPRICORN</h2>
          <p>This relationship lacks stimulation. You are both far too cautious, frugal and self-righteous to last. This is a dead end in the bedroom. </p>

          <h2>CAPRICORN  & AQUARIUS</h2>
          <p> Although you can appreciate the Water-bearer's mind and originality, the Aquarian's lack of direction and carefree nature will cause you to shy away.</p>

          <h2>CAPRICORN  & PISCES</h2>
          <p> This is not a bad match. The Pisces' eagerness to please will attract and hold you. This union will only encounter problems if you neglect the Fish's need for attention.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Capricorn
