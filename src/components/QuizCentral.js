import React from 'react'
import '../assets/css/QuizCentral.css'
import { NavLink } from 'react-router-dom'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const QuizCentral = () => {
  return (
    <div className='main_container'>
      <video autoPlay loop muted src={homepagebgvideo}></video>
      <div className="left-container">

        <div className="heading">
          <h1>Quiz Central</h1>
        </div>

        <div className="para">
          <p>All these tests are personalized to your preference and full privacy is assured. The quizzes are usually 8-12 questions long. The original lovetest is a bit longer and offers more features. Usually every month, there are new quizzes added, so make sure to come back to the site very often to see what's new and exciting.</p>

          <p>Take one of our personalized love tests. The questionnaires of these tests are personalized just for you and additional features are available as well.</p>

          <h3><NavLink to='/OriginalLoveTest'>The Original LoveTest</NavLink></h3>
          <p>Answer 42 questions and get advice about your relationship as well as compatibility information.</p>

          <h3><NavLink to='/LoveThermometer'>Love Thermometer / Calculator</NavLink></h3>
          <p>The love thermometer calculates how hot the romance with your heartthrob can be. Several test options to choose from.</p>

          <h3><NavLink to='/LoveFortune'>Love Fortune Teller</NavLink></h3>
          <p>Did you ever want to get more information about yourself? Then ask the Love Fortune Teller for more insights. It's fast and a pretty accurate…</p>

          <h3><NavLink to='/LoveCompatibility'>Love Compatibility Analysis</NavLink></h3>
          <p>This is our newest love analyzer… enter your birthday and the birthday of your partner to find out how compatible you are on the astro-birth level.</p>
        </div>

      </div>

    </div>
  )
}

export default QuizCentral