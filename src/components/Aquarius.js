import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Zodiac.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Aquarius2 from '../assets/images/Aquarius2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Aquarius = () => {
  return (
    <div>
      <Navbar/>
      <div className='zodiac Aquariuscontainer'>
                <video autoPlay loop muted src={astrologerbgvideo}>
                </video>

                    <h1>Compatibility Information for Aquarius</h1>
                    <NavLink to='/Aquarius'><img src={Aquarius2} alt="" /><h2>Aquarius</h2></NavLink>
                    <p className='para'>This information was kindly provided by the folks of AstroMate. <br /> The only online match-making service that uses astrology to find your match made in heaven.</p>
                
                <div className='male-female'>
                    <div className='male'>
                        <h2 >Aquarius Male</h2>
                        <p>You need to be mentally intrigued before you will make your move on a perspective mate. Mind contact is a necessity for sexual fulfillment. You are generous, open and sincere to those you care about. You like to get involved in your mates' interests. You will search for answers and the truth in any relationship. You are somewhat shy and will often wait for someone else to make the first move. You can't live within a relationship that is domineering or restrictive in any way. Although you appear to be cool outwardly, you are really quite emotional and tender. When it comes to sexual encounters you are very imaginative, however, you also are a dreamer of erotic fantasies. You will look for a partner who is willing to satisfy your relentless pursuit of intense sexual experiences. You fall in love quickly but you are also hesitant to commit completely to anyone.</p>
                    </div>

                    <div className='female'>
                        <h2 >Aquarius Female</h2>
                        <p>You have high standards and you insist on being treated with respect. There is no way you will compromise. You are sensitive, intellectual and you like parties and people. You are honest, direct and will bare your soul to those you care about. You are a very giving person, always willing to offer advice to those in trouble, You are quite capable of doing a man's job and seldom pick your mate based on what he can do for you. You love to travel and must feel independent in your existence. You do require a great deal of love and companionship, however it must be on your terms. You are not that eager to marry and you seek intellectual stimulation foremost.</p>

                    </div>




                </div>
                <div className='mate'>
                    <h2 className='zodiac-mate aquarius'> AQUARIUS MATE</h2>
                    <p>You tend to match up to most signs in a friendly manner, but when it comes to love some signs are better than others.
                    </p>
                    <h2> AQUARIUS & ARIES</h2>
                    <p>This is an excellent match. You both enjoy a large variety of entertainment. A truly adventuresome union as long as neither one of you tries to dominate or regulate activities. </p>

                    <h2> AQUARIUS & TAURUS</h2>
                    <p>The stubborn Bull will have difficulties understanding the unpredictable side of you. Concessions will be necessary on the part of both of you if success is to follow.</p>

                    <h2> AQUARIUS & GEMINI</h2>
                    <p>  This is a delightful, intellectually stimulating relationship. Not always smooth but certainly an exciting and entertaining connection. </p>

                    <h2> AQUARIUS & CANCER</h2>
                    <p> You are far too aloof for the insecure Crab. Not a likely encounter, highly dangerous for Cancer and somewhat binding for you.  </p>

                    <h2> AQUARIUS & LEO</h2>
                    <p>You are polar opposites. The is plenty of chemistry, however the Lion is more physical in nature then you are. You on the other hand are concerned with the intellectual aspect of the relationship that is often lacking.</p>

                    <h2> AQUARIUS & VIRGO</h2>
                    <p> You are both into the intellect, however you might be a little bit too progressive for the practical Virgoan. Virgo's are just not social enough to hang on to you or hold your interest.
                   
                    </p>

                    <h2> AQUARIUS & LIBRA</h2>
                    <p> Very well-suited couple both mentally and physically. Exciting, fun loving and carefree connection. Your spending habits are the only foreseeable dilemma.</p>

                    <h2> AQUARIUS & SCORPIO</h2>
                    <p> This is not the best coalition. You are both fixed in your beliefs and your free-spirited nature arouses suspicious side of the Scorpion.</p>

                    <h2> AQUARIUS & SAGITTARIUS</h2>
                    <p> This is a wonderful affair, two ships that pass in the night. You are an active and outgoing couple, however seldom lasting because eventually you will both go in your own direction. </p>

                    <h2> AQUARIUS & CAPRICORN</h2>
                    <p> This is not good. You both have totally different goals in life. You are far too humanitarian to live with the Goat's manipulative, ambitious ways </p>

                    <h2> AQUARIUS & AQUARIUS</h2>
                    <p> Although this is probably the most inventive coalition, it is lacking in the sexual arena. Not a lasting relationship but it can be fun for the moment.</p>

                    <h2> AQUARIUS & PISCES</h2>
                    <p> This is a pretty dicey combination. The Fish's emotional blackmail only drives you further away. This Pisces is likely to end up hurt and confused.</p>
                </div>

            </div>
      <Footer/>
    </div>
  )
}

export default Aquarius
