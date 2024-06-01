import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Leo2 from '../assets/images/Leo2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Leo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='zodiac Leocontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Leo</h1>
        <NavLink to='/Leo'><img src={Leo2} alt="" /><h2>Leo</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Leo Male</h2>
            <p>You are extremely attractive to women. You are easily noticed in a crowd and you usually get a lot of attention. You are a showman, flashy and flamboyant. You can be careless at times, however you are also a master at covering up mistakes or anything else. You love and admire beautiful women, but your mate must not outshine you in any manner. You prefer your female to be reserved so as not to steal your thunder. You are an extrovert, you love to laugh, you are generous, outgoing and you love the best of everything. You have a high opinion of yourself and you want your mate to feed your ego.</p>
          </div>

          <div className='female'>
            <h2 >Leo Female</h2>
            <p>You need to be admired and desired. Unfortunately you tend to bestow your affections on the wrong men. You are extremely demanding when it comes to lovemaking. It isn't so much that you want to be love but you do want to be worshipped and adorned with all the nice things in life. You can tend to get lazy if you become too comfortable with your lover. Although you are dignified you can be domineering. You are vain, however you are also very generous. You can be faithful as long as your lover is affectionate.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate leo'>LEO MATE</h2>
          <p>When looking for a prospective mate you will interact diversely with all the other constellations including your own.</p>

          <h2>LEO & ARIES</h2>
          <p>This is a capricious match. Your common interests and lusty passionate nature bring about outrageous social and sexual encounters.</p>

          <h2>LEO & TAURUS</h2>
          <p>This is an ill-fated connection, your extravagance and desire to party are antagonizing to the prudent Bull. This relationship is not likely to start up in the first place, and not likely to last if you do make it to first base.</p>

          <h2>LEO & GEMINI</h2>
          <p>You are enticed by the clever Twins, nevertheless the Twins' fickleness enrages you. Intriguing while this connection lasts, however it's usually short lived.</p>

          <h2>LEO & CANCER</h2>
          <p>You're powerful desire to be the center of attention along with your vanity is pernicious for the shy, sensitive Crab. Not a choice alliance.</p>

          <h2>LEO & LEO</h2>
          <p>This is a dramatic combination, a sexual delight, providing both desist from dominating one another. This is truly a royal match and believe it or not, it often works.</p>

          <h2>LEO & VIRGO</h2>
          <p>Virgo's desire to be in command and methodical nature collides with your carefree, spontaneous temperament. This combo takes a lot of compromise on the part of the Virgoan.</p>

          <h2>LEO & LIBRA</h2>
          <p>Libra's sophistication and your flair constitute an entertaining coalition, unless a financial deficit prevails. You can both be quite extravagant and wasteful.</p>

          <h2>LEO & SCORPIO</h2>
          <p>You can dance rather well in a horizontal position, the end result can be crimes of passion, due to jealousy. This union is usually hot, heavy and short lived.</p>

          <h2>LEO & SAGITTARIUS</h2>
          <p>This is probably your foremost partner physically and mentally. This union will revel in spending, travel and adventure. Quite an exciting connection.</p>

          <h2>LEO & CAPRICORN</h2>
          <p>You'll get bored with the Goat's careful and enterprising ways, which is too bad because the Goat is the one sign that can usually afford to spoil you monetarily.</p>

          <h2>LEO & AQUARIUS</h2>
          <p>The polarities usually attract passionately, nevertheless the Water-bearer's expansive interests and higher mind leave you feeling somewhat neglected and unimportant.</p>

          <h2>LEO & PISCES</h2>
          <p>This is a detrimental relationship for the shy Pisces and a most unlikely attraction for you. Not compatible and very hurtful for the Fish that is attracted to you.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Leo
