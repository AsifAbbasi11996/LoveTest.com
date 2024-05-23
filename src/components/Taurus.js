import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Taurus2 from '../assets/images/Taurus2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Taurus = () => {
  return (
    <div>
      <Navbar />
      <div className='zodiac Tauruscontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Taurus</h1>
        <NavLink to='/Taurus'><img src={Taurus2} alt="" /><h2>Taurus</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate.<br/> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Taurus Male</h2>
            <p>You like to enjoy your passions in comfort. Soft music, low lights and a good brandy are a must. You like to be surrounded with beautiful objects and you demand what you consider to be quality in all aspects of your life including your women. You don't like women who waste your time. If a potential lover really wants to be with you she shouldn't take too long to decide. You are patient but chances are you will fall asleep if she doesn't make her move. You don't like a mate who argues with you, after all it is fruitless because there is no way she can possibly win. You also frown upon the female who plays hard to get, now that's a game you just won't play. You are a physical individual, earthy, lusty and sensual, a connoisseur of food, drink and women. When you take someone out you want to get your money's worth and you expect your partner to treat you well if you show them a good time. You are strong willed, possessive, intensely emotional and highly sexed. You are protective over the female who knows how to satisfy your sexual cravings.</p>
          </div>

          <div className='female'>
            <h2 >Taurus Female</h2>
            <p>You are a complex lady. You are ruled by the planet Venus that makes you knowledgeable instinctively in the art of seduction. You love beautiful objects and adornments and will welcome any quality gifts that your lover buys for you. You always know exactly what you want and you will become quite stubborn if you don't get it. As long as your man stays on your good side and treats you with tender loving care you will be affectionate and willing to give him whatever he wants. You are eager to learn about life and the man that can teach you the ins and outs will win your heart. You look for a lover who is sincere, appreciative and knowledgeable about getting the best quality for the best price. If your chosen partner lives up to your standards you will be a loyal, loving and excellent bed mate.</p>

          </div>




        </div>
        <div className='mate'>
          <h2 className='zodiac-mate taurus'>TAURUS MATE</h2>
          <p>Your lover must approach you properly in order to win your heart. You love good cooking and fine wine. The way to your heart is definitely through your stomach. You are turned off by individuals who exaggerate or color the truth. You like to be admired and will respond if your lover is encouraging. Your connection to someone born under the same sign as yourself or one of the remaining eleven signs is as follows.</p>

          <h2>TAURUS & ARIES</h2>
          <p>This union is better as a hot passionate affair. Your possessiveness will cramp the Aries free-loving nature.</p>

          <h2>TAURUS & TAURUS</h2>
          <p> Not bad sexually, however this union is somewhat dull in other areas of life. You will have a tendency to grow fat together. Visualize two couch potatoes eating in front of the television.</p>

          <h2>TAURUS & GEMINI</h2>
          <p>Gemini's lack of respect for possessions and stability will drive you up a wall. You aren't spontaneous enough for the versatile Twin. Not really a likely combination.</p>

          <h2>TAURUS & CANCER</h2>
          <p> Good partnership. You will enhance one another. You offer the Crab the necessary security and in return you receive the affection and loyalty you desire.</p>

          <h2>TAURUS & LEO</h2>
          <p> This is not only an unlikely connection but one that is built on deception. If your financial position is good you will attract the Lion however, this partner will want the freedom to roam.</p>

          <h2>TAURUS & VIRGO</h2>
          <p>Problems usually arise in the bedroom, however in all other areas you and your Virgoan will do remarkably well. You are both practical and hard working.</p>

          <h2>TAURUS & LIBRA</h2>
          <p>Compromise is necessity if you want this union to work. Your Libran mate will be far too indecisive for you and you lack the sophistication that the Scales demand in a partner.</p>

          <h2>TAURUS & SCORPIO</h2>
          <p> Polarity attraction, sexually dynamic, however you are both fixed signs that can cause difficulties. Your stubbornness and the Scorpions jealousy will result in a no win situation.</p>

          <h2>TAURUS & SAGITTARIUS</h2>
          <p>This combo is better left as friends. The archer likes to gamble, free-spirited and taking each day as it comes. You on the other hand could never live without routine and would frown up the Sagittarians irresponsibility.</p>

          <h2>TAURUS & CAPRICORN</h2>
          <p>This is not a bad alliance as you both have the same interests where money, possessions and security are concerned. The biggest drawback is the old 'all work and no play' syndrome.</p>

          <h2>TAURUS & AQUARIUS</h2>
          <p>You are both fixed signs with a totally different concept of life. The water-bearer is too much of a loner and you always want to own or possess your partner.</p>

          <h2>TAURUS & PISCES</h2>
          <p>This combination can work, however the Fish lack practicality which can be a deterrent for you. On the other hand your Pisces mate may leave if you become too domineering.</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Taurus
