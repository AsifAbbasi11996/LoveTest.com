import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Gemini2 from '../assets/images/Gemini2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Gemini = () => {
  return (
    <div>
      <Navbar/>
      <div className='zodiac Geminicontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Gemini</h1>
        <NavLink to='/Gemini'><img src={Gemini2} alt="" /><h2>Gemini</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate. <br/>The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Gemini Male</h2>
            <p>When it comes to love you are always on the move, you can't stand schedules or routine in any aspect of your life. You refuse to conform to a clock. You are likely to try to fit as much into your life at one time as possible. You are intelligent, love to communicate and you are extremely versatile and knowledgeable. You are a smooth convincing talker and can usually capture any female that interests you through communication alone. Your youthful nature is extremely appealing to most women. Your fun loving approach to life, your passion for parties and entertainment and your constant search to experience something new and different contribute to your charm. You have a great curiosity about women and will pursue someone that interests you while a challenge exists. Your staying power in a relationship is certainly not record breaking. You tire easily and will take off to pursue new interests if you get bored.</p>
          </div>

          <div className='female'>
            <h2 >Gemini Female</h2>
            <p>You are a delight; witty, charming and provocative. You are friendly and easy to approach but not all that interested in a long term relationship. You're not an easy lover to read. You can swivel on a dime and your passionate receptive side can turn abruptly into a distant individual. You demand mental compatibility in order to be turned on and you're not likely to let anyone dance with your body if they can't dance with your mind. You are forever trying to improve things, even your lover. Change is a big part of your life pattern and a necessity to your emotional well being. You will use your sex appeal as a weapon if necessary to get what you want.</p>
          </div>




        </div>
        <div className='mate'>
          <h2 className='zodiac-mate gemini'>GEMINI MATE</h2>
          <p>You can play a heartless game using your keen intellect, charm and sex appeal to your advantage. You can easily persuade any sign to have a passionate affair with you, however a long term relationship is another story. You aren't likely to stay in any union that restricts, confines or holds you back in any way. You match up as follows to your own sign and the remaining eleven signs.</p>

          <h2>GEMINI & ARIES</h2>
          <p>This is one of your best matches. You both have a high energy, a thirst for adventure and spontaneity. Passionate, sudden and compelling this union can last.</p>

          <h2>GEMINI & TAURUS</h2>
          <p> This is not a good connection for the Bull. Your lack of routine upsets this steady sign. You find Taureans far too dull for your liking and will tend to wander early into the relationship.</p>

          <h2>GEMINI & GEMINI</h2>
          <p>You can have some real good times but you seldom stay together unless you meet in later years. There is a lack of direction that usually prevails, however you can have some wonderful times together.</p>

          <h2>GEMINI & CANCER</h2>
          <p>The Moon child is far too moody and sensitive for your fickle ways. You are not a homebody like the Crab. You have totally different interests then a Cancer.</p>

          <h2>GEMINI & LEO</h2>
          <p>This is not a bad connection. You both complement one another. The generous Lion will bend to whatever you want as long as you let your flattering silver-tongue lead the way.</p>

          <h2>GEMINI & VIRGO</h2>
          <p> This is not the best union, the practical Virgo views you as being disorganized and frivolous. You on the other hand don't think that the Virgoan knows how to have a good time.</p>

          <h2>GEMINI & LIBRA</h2>
          <p>Magnetic union, however not long lasting. The Scales find it difficult to live in the turmoil and melodrama that you thrive on. This relationship is usually short, hot and sweet.</p>

          <h2>GEMINI & SCORPIO</h2>
          <p>Scorpio's jealous tendencies are impossible for you to handle. You flirtatious ways and little white lies will drive the Scorpion as far away as possible.</p>

          <h2>GEMINI & SAGITTARIUS</h2>
          <p>This union can work, however you both love to travel therefore you may not spend much time together. You both tend to leave your fate to luck which can make this a risky relationship.</p>

          <h2>GEMINI & CAPRICORN</h2>
          <p>Not great. The goat is too ambitious and organized for you. You have totally different priorities in love and in life.</p>

          <h2>GEMINI & AQUARIUS</h2>
          <p>Super alliance, you are both original and like variety. This makes for a fun loving couple. This is not always a lasting union but it is certainly worth pursuing.</p>

          <h2>GEMINI & PISCES</h2>
          <p>Insecurity usually ruins this relationship. This can be an extremely emotional union. Unique, destructive, yet passionate and lustful resulting in hurt and anxiety.</p>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Gemini
