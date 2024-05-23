import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Cancer2 from '../assets/images/Cancer2.jpg'
import astrologerbgvideo from '../assets/images/astrologerbgvideo.mp4'

const Cancer = () => {
  return (
    <div>
      <Navbar/>
      <div className='zodiac Cancercontainer'>
        <video autoPlay loop muted src={astrologerbgvideo}>
        </video>

        <h1>Compatibility Information for Cancer</h1>
        <NavLink to='/Cancer'><img src={Cancer2} alt="" /><h2>Cancer</h2></NavLink>
        <p className='para'>This information was kindly provided by the folks of AstroMate.<br/> The only online match-making service that uses astrology to find your match made in heaven.</p>

        <div className='male-female'>
          <div className='male'>
            <h2 >Cancer Male</h2>
            <p>In love relationships you are prone to sulking, daydreaming and you can be somewhat idealistic about the role you play. You do love beautiful women however you also insist that the love of your life be a good conversationalist as well. You are possessive once you fall in love and you expect a great deal from your mate. You cling to your Memories, old friends and habits and you truly resist any form of change. You are generally lucky in love and usually attract beautiful, bright women.</p>
          </div>

          <div className='female'>
            <h2 >Cancer Female</h2>
            <p>You need to be handled with tender loving care and you will turn away from an excessively aggressive man. You're the type of woman that will sacrifice anything and everything for your family and you'll also go all out for your mate. You love to be romanced and praised for all the little extras you provide. You love to cuddle and hug and can not be happy living with someone who is cool, detached and not interested in contributing to family.</p>
          </div>
        </div>
        <div className='mate'>
          <h2 className='zodiac-mate cancer'>CANCER MATE</h2>
          <p>Your sensitive nature can be difficult to deal with. You are often misunderstood at an emotional level You need a mate that can understand your tenderness. You match up you your own sign and the other eleven as follows.</p>

          <h2>CANCER & ARIES</h2>
          <p>This is not a very good combination for you. The Ram's lack of tact and their hot temper is just too devastating for your sensitive and insecure nature.</p>

          <h2>CANCER & TAURUS</h2>
          <p>The Bull is one of your best partners. You are both homebodies who appreciate good food, good quality and thrift. You can keep each other quite happy. Truly an enduring relationship.</p>

          <h2>CANCER & GEMINI</h2>
          <p>The Twins play too many mind games for your soft and innocent approach to life. Gemini's flirtatious free-spirited nature is just too hurtful for you to have to deal with.</p>

          <h2>CANCER & CANCER</h2>
          <p>Together you are far too negative for this union to work. Emotional problems will exist throughout the entire relationship. Neither one of you has the ability to see the positive side to the relationship.</p>

          <h2>CANCER & LEO</h2>
          <p>The Lion needs to be the center of attention, therefore you will often feel quite neglected in this relationship. You have a tendency to nag and that will drive a Leo mate on to greener pastures.</p>

          <h2>CANCER & VIRGO</h2>
          <p>This partnership lacks excitement, to say the least, however that doesn't usually matter to either you or your mate. Security and the home are much more important to both you and the practical Virgoan.</p>

          <h2>CANCER & LIBRA</h2>
          <p>Your mood swings are far too upsetting for the Scales. Libra Needs harmony and a variety of entertainment which really isn't your style or your intent. You create melodrama at an emotional level and would prefer to stay at home where it's safe and secure.</p>

          <h2>CANCER & SCORPIO</h2>
          <p>You are both too possessive that can and usually does lead to problems at some time. As long as you deal with these issues promptly you can have a happy, satisfying and loving union.</p>

          <h2>CANCER & SAGITTARIUS</h2>
          <p>The Archer is too worldly for you. You don't like to take risks and Sagittarians thrive on chance. This is not your best bet for a lasting union but it is one that often attracts you.</p>

          <h2>CANCER & CAPRICORN</h2>
          <p> Polar opposites, Usually there is a lot of chemistry, but the Goat does not usually have the time to show you enough affection. If you can put up with their workaholic ways you can rest assured that you will be well-taken care of financially.</p>

          <h2>CANCER & AQUARIUS</h2>
          <p>You are far too sensitive for the Water-bearers aloofness. Aquarians cannot tolerate your need to cling to them.</p>

          <h2>CANCER & PISCES</h2>
          <p>You and the Fish are probably the two most sensitive signs of the zodiac. Although you can comprehend one another you can also play emotional games and hurt each other. This connection can work if you communicate openly and honestly.</p>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Cancer
