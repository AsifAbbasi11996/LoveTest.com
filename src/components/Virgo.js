import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Virgo = () => {
  return (
    <div>
      <Navbar/>
      <div className='zodiac Virgocontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Virgo</h1>
        {/* image here*/}
        {/* <img src={ariespic} /> */}
        <p className='para'>This information was kindly provided by the folks of AstroMate. The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Virgo Male</h2>
            <p>You have a great curiosity about women. These fine creatures are something for you to experiment with, examine and cater to. As for sex you feel that it is an experience that should not be overlooked, providing you have the time and the desire. You are interested in anything that will further your career. You are always interested in how much money your partner can make and in turn what they do with it as you find waste to be sinful. You can come across as a father figure if your mate lets you become over protective. You will only propose or get into a committed partnership after a respectable length of time and only when you are one hundred percent sure that the relationship will be lasting. You need to feel that your mate will enhance and support your career and make your home a clean place of comfort. You offer security, reliability and faithfulness.</p>
          </div>

          <div className='female'>
            <h2 >Virgo Female</h2>
            <p>You have some superficial standards about the man in your life. You insist that your partner be squeaky clean and practical and goal oriented. Your standards are set quite high and therefore it usually takes you longer to find someone that you feel is worthy to commit to. You do tend to marry late in life and only if the right knight in shining armor comes along. You are an excellent housekeeper, a strict parent and a good companion. You are attractive well into your middle years and often attract more men as you age.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate virgo'>VIRGO MATE</h2>
          <p>Zodiacal match-ups for you are not the easiest due to your critical analytical nature.</p>

          <h2>VIRGO & ARIES</h2>
          <p>The volatile Aries will upset your nervous nature, the conclusion being ill-fated and certainly not lasting. The Ram just won't put up with your put-downs.</p>

          <h2>VIRGO & TAURUS</h2>
          <p>You both share the same high standards and, needless to say, are not the most exciting couple on earth. This is a much better connection during the last half of life.</p>

          <h2>VIRGO & GEMINI</h2>
          <p>Not a chance. The risky, carefree fickle Gemini sees you as a drag. Truly a miracle if the two of you do interact for any length of time. This union is best left alone unless other factors prevail in both charts.</p>

          <h2>VIRGO & CANCER</h2>
          <p>Somewhat dull. You both tend to avoid getting involved in activities outside your own environment. Neither of you bother to end the relationship even if it isn't working. This union is a critical and nagging match that results in lowered self-esteem for both of you.</p>

          <h2>VIRGO & LEO</h2>
          <p>You will have continuous arguments concerning finances and sex. Your critical tongue will make the Lion wander, seeking the ego-boosting that is necessary for the proud Leo's existence.</p>

          <h2>VIRGO & VIRGO</h2>
          <p> You are quite likely to agree on most subjects. Virgo's are work, security and cleanliness oriented. When two of you get together in this capacity, unusual sexual pleasures can unfold.</p>

          <h2>VIRGO & LIBRA</h2>
          <p> Libra's extravagant, indecisive nature bothers you, however Libra's charm can normally melt your critical tongue. Not likely to be lasting but it can be passionate while it lasts.</p>

          <h2>VIRGO & SCORPIO</h2>
          <p>This is an interesting match. If the scorpion can tempt you into sexual encounters that are exotic, the end result will end in fireworks.</p>

          <h2>VIRGO & SAGITTARIUS</h2>
          <p>This is sexually not bad. The Archer's non-committal approach to life however, drives you up a wall. This combo works better as a passing affair.</p>

          <h2>VIRGO & CAPRICORN</h2>
          <p>This is an excellent union. Practicality and neatness go hand in hand for the Goat as well as for you. Fear of material loss locks you in tight for a long term union.</p>

          <h2>VIRGO & AQUARIUS</h2>
          <p>This is a far more mental then physical connection. You rule the lower mind and the Water-bearer the higher mind. This is an intellectual union that is likely to be lasting.</p>

          <h2>VIRGO & PISCES</h2>
          <p>This is a polarity attraction. You are enamored by the Pisces empathetic ways and in turn the Fish needs your practical direction. Pisces' sexuality can bring out the erotic side in you.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Virgo
