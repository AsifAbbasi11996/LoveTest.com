import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Libra2 from '../assets/images/Libra2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Libra = () => {
  return (
    <div>
      <Navbar/>
      <div className='zodiac Libracontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Libra</h1>
        <NavLink to='/Libra'><img src={Libra2} alt="" /><h2>Libra</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Libra Male</h2>
            <p>You make bedtime a rewarding experience. You are determined to satisfy your mate even if it takes all night. You love beauty in all aspects of life -including your women. You use your charm and sophisticated intelligence as a weapon and you are an expert at luring your prey. When it comes right down to taking action, however your indecisiveness often takes over. You start to weigh the pros and cons and if you have any doubts at all you will continue to play with your victims' desires. You don't really like to hurt anyone intentionally which does end up putting you at the mercy of your lover. You will respond to flattery or praise. You become interested in women at a young age. Your preference is usually well dressed women with long hair and moist lips.</p>
          </div>

          <div className='female'>
            <h2 >Libra Female</h2>
            <p>You are noted for your grace, refinement and beauty as well as your repulsion to anything unattractive. You are meticulous in manner and dress and add a touch of elegance to all that surrounds you. Your goal is more to be admired by a man but if he is willing to boost your ego on a continuing basis you will show him how skilled you are at the art of lovemaking. You tend to prefer the artistic type of man, however your partner must also be highly lucrative in order to furnish you with the adornments that you require to keep you happy.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate libra'>LIBRA MATE</h2>
          <p>When it comes to compatible signs for you harmony is the most important factor to keep in mind. Without harmony you can't possibly survive.</p>

          <h2>LIBRA & ARIES</h2>
          <p>Polarity attraction. Shooting stars in the bedroom. Tension, however, at a mental level. It can work if you are both willing to compromise.</p>

          <h2>LIBRA & TAURUS</h2>
          <p>Not too bad as you both value the finer things in life. The Bull's possessiveness can bring about some problems for you however if the price is right you'll put up with a little control.</p>

          <h2>LIBRA & GEMINI</h2>
          <p>Intellectual connection. This relationship is much better left as a friendship. You both need a great deal of freedom to experience other people. If you both agree on ground rules right from day one it can last.</p>

          <h2>LIBRA & CANCER</h2>
          <p>This is not the best match. The moody Crab is just too difficult for you to handle. You need to surround yourself with positive individuals who will create a harmonious environment.</p>

          <h2>LIBRA & LEO</h2>
          <p>This is a good union, similar lifestyles, both hooked on sex. The Lion's dazzle, and your refined nature balances out quite nicely. Together you make an extremely nice looking couple.</p>

          <h2>LIBRA & VIRGO</h2>
          <p>No Way! The practical Virgoan will never satisfy your desires. You're better not to pursue this partner for any kind of a long term commitment.</p>

          <h2>LIBRA & LIBRA</h2>
          <p>This is not a bad connection, but boredom can be a definite risk as you will both expect to be entertained. Your lazy nature when it comes to domestic chores will also be a problem if you can't afford to hire help.</p>

          <h2>LIBRA & SCORPIO</h2>
          <p>The Scorpions' jealousy vexes the casual, harmonious nature that you possess. This is certainly not an alliance made in heaven and usually quite difficult for you to balance.</p>

          <h2>LIBRA & SAGITTARIUS</h2>
          <p>This is an auspicious relationship. The Archer's charisma and thirst for adventure will hold your interest. Your good looks and cultural knowledge will entice the Archer.</p>

          <h2>LIBRA & CAPRICORN</h2>
          <p> It's difficult for the Goat to accept your inactivity. Physically there is a powerful attraction between you, unfortunately it is seldom lasting.</p>

          <h2>LIBRA & AQUARIUS</h2>
          <p>This is a compatible coalition, you are capable of making love in the highest form. Your two of a kind, neither of you care about detail nor domestics.</p>

          <h2>LIBRA & PISCES</h2>
          <p>This is not usually lasting. The Fish is too confused and sensitive in nature that makes this connection a highly complicated combination. The end result can be devastating if you aren't careful.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Libra
