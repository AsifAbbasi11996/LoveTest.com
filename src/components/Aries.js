import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Aries = () => {
  return (
    <div>
      <Navbar />
      <div className='zodiac Ariescontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Aries</h1>
        {/* image here*/}
        {/* <img src={ariespic} /> */}
        <p className='para'>This information was kindly provided by the folks of AstroMate. The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Aries Male</h2>
            <p>When it comes to love you are aggressive, domineering, energetic and restless. You are impulsive, imaginative and dynamic, a doer, however on can never be sure what you'll do next. You can drive your lover crazy if she isn't accustomed to high energy excitement. You look for spontaneous and imaginative partners who can hold your interest and keep up to your fast pace. You can be a bed bouncer but you always expect complete loyalty from your mate. Although your temper is short lived you will explode if you become suspicious of your lover. You get jealous quickly and you need constant appreciation and reassurance in order to feel secure in your relationship.</p>
          </div>

          <div className='female'>
            <h2 >Aries Female</h2>
            <p>You may appear to dislike men due to your extreme independence. However, nothing could be further from the truth. You are domineering and you have a rather nonchalant attitude. Your energetic and once aroused, you will be sexually aggressive. You like to make noise when you make love and in some ways you are like a wild animal in the bedroom, playful, vibrant and fearless. You like to use your body and are quite athletic both in and out of the sexual arena. You are a romantic, in love with love. You accept love as ones of life's little pleasures. You are a free spirit, always looking for a lover, not a father. You are an idealist. You go after whatever you want and you certainly won't take no for an answer. You have no trouble attracting men because you are always where the action is. You do not handle your money well which can cause a problem for the man who falls in love with you. You however are worth every cent that you cost your lover as you can stimulate him in ways that no one else can do.</p>

          </div>




        </div>
        <div className='mate'>
          <h2 className='zodiac-mate aries'>ARIES MATE</h2>
          <p>You will not tolerate being bossed around by your mate. You hate have your space infringed upon and you can't stand it if your mate shows up late for a date. You like to be asked for advice and flattery always makes you feel important. You will never slow down and wait for your lover. It's keep up or get left behind. You match up to your sign and the remaining eleven signs as follows.</p>

          <h2> ARIES & ARIES</h2>
          <p>Temper tantrums are quite likely to erupt into major wars with this combination. Remember only one party can win and neither one will accept defeat. Passionate but problems.</p>

          <h2> ARIES & TAURUS</h2>
          <p>The Bull has trouble with your free spirited attitude. With compromise it can work. A little bit dull for you at times however it can be a stabilizing experience for you.</p>

          <h2> ARIES & GEMINI</h2>
          <p>Wonderful alliance. This is an exciting, sexual encounter that can in fact last. Both you and Gemini are so spontaneous and full of life that there is no time for either of you to become bored.</p>

          <h2> ARIES & CANCER</h2>
          <p>The Crab is far too sensitive and slow for your speedy and hot tempered nature. You will have difficulty listening to the Crabs nagging and negativity. This is really a poor match up right from day one.</p>

          <h2> ARIES & LEO</h2>
          <p>This is a most exhilarating combination. You both share the same likes and dislikes. You are both always on the go, craving excitement, love and fun. This is truly a link made in heaven.</p>

          <h2> ARIES & VIRGO</h2>
          <p> Your impulsiveness is just too much for the Virgoan. Virgo's practical, critical nature will drive you away rapidly. This is a relationship better left alone.</p>

          <h2> ARIES & LIBRA</h2>
          <p>Although opposites attract, the Scales are just a little too lazy to keep up with you. You on the other hand lack the sophistication required to keep a Libran happy.</p>

          <h2> ARIES & SCORPIO</h2>
          <p>You are both ruled by the catalyst Mars that makes this union hot and heavy. The possessive Scorpio will, however, does clash with your free spirited nature.</p>

          <h2> ARIES & SAGITTARIUS</h2>
          <p>This can be a good and a lasting relationship. You are both fun-loving and quite oblivious to the faults that might drive most people crazy. This is an exciting and adventurous union.</p>

          <h2> ARIES & CAPRICORN</h2>
          <p> Finances are the biggest detriment in this connection. You can spend it as fast as the hard working Goat can make it that drives the frugal Capricorn insane.</p>

          <h2> ARIES & AQUARIUS</h2>
          <p>This is not a bad connection. You are both inquisitive, however at times you may find it difficult to contemplate what the Water-bearer will do next.</p>

          <h2> ARIES & PISCES</h2>
          <p>Sexually this is not a bad alliance, but your temperaments are just so different that it does put a strain on the relationship. You could never handle the Fishes emotional whims for any length of time.</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Aries
