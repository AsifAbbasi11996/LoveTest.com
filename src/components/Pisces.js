import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Pisces = () => {
  return (
    <div>
      <Navbar />
      <div className='zodiac Piscescontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Pisces</h1>
        {/* image here*/}
        {/* <img src={ariespic} /> */}
        <p className='para'>This information was kindly provided by the folks of AstroMate. The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2>Pisces Male</h2>
            <p>You are sensitive and passionate, however somewhat unstable. You are attracted to strong voluptuous women. You can be extremely changeable, saying one thing to your lover and then turning around and doing exactly the opposite. You are very intuitive regarding acquaintances however quite blind to the defects of those you love. You love to go first class and will over extend yourself in order to shower your mate with expensive gifts.</p>

          </div>

          <div className='female'>
            <h2>Pisces Female</h2>
            <p>You are feminine, intuitive, responsive and sensual. You are drawn to the creative or occult subjects. You are empathetic to those who have problems, therefore you often get used. You are a great one for fantasizing and in fact acting out your desires. Your biggest problem is that you tend to pick the wrong mate, resulting in the need to have extra marital affairs in order to receive the affection necessary for your survival. You are also prone to tears and extremely good at using emotional blackmail.</p>

          </div>




        </div>
        <div className='mate'>
          <h2 className='zodiac-mate pisces'>PISCES MATE</h2>
          <p>When you get involved with the other eleven signs or another Fish different reactions occur.
          </p>
          <h2>PISCES & ARIES</h2>
          <p>You are far too sensitive for the aggressive Ram. You will be left behind to drown in your sorrows. An unfortunate match.</p>

          <h2>PISCES  & TAURUS</h2>
          <p> This is not a bad connection, however the Bull can get upset with your impractical nature. You, on the other hand, may find that the Bull is too stubborn.</p>

          <h2>PISCES  & Gemini</h2>
          <p> Your emotional blackmail will usually hold a Gemini, however sorrow almost always prevails. A very destructive union for both parties involved.</p>

          <h2>PISCES  & CANCER</h2>
          <p>You belong together. You are both sensitive, weepy and love to dwell in self-pity. This is a great match, certainly lasting, however someone negative and moody.</p>

          <h2>PISCES  & LEO</h2>
          <p>You are doomed in this alliance. The Lion is too outgoing and you are far too sensitive. A hurtful relationship with little substance.</p>

          <h2>PISCES  & VIRGO</h2>
          <p>This is your polar attraction. It can be extremely perverse in the bedroom, but difficult at a mental level. You are impractical and this will really try the Virgoans patience.
          </p>

          <h2>PISCES  & LIBRA</h2>
          <p>You are both creatively inclined, however you are just not sophisticated enough for the Scales. Librans also have trouble putting up with your emotional whims.</p>

          <h2>PISCES  & SCORPIO</h2>
          <p>This is a highly sexual union. You love to be possessed and cared for with the deep, warm affection that the Scorpion can provide. Truly a match made in heaven.</p>

          <h2>PISCES  & SAGITTARIUS</h2>
          <p>This is not your best alliance as the Archer's non-committal nature will hurt your tender heart. Your daily melodramas will drive the Sagittarius away.</p>

          <h2>PISCES  & CAPRICORN</h2>
          <p>This is not a bad combo in general however, you will probably run around on the Goat due to loneliness. You are also too wasteful for the Capricorn to deal with.</p>

          <h2>PISCES  & AQUARIUS</h2>
          <p>This is not the best union. The Water-bearer is far too cool and detached for you. Your tears and tantrums will soon tire the Aquarius.</p>

          <h2>PISCES  & PISCES</h2>
          <p>This is an emotional connection. Extremely good in the bedroom, but difficult out of the bedroom. You both crave attention and affection yet you want to do your own thing. Exhausting but exciting.

          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pisces
