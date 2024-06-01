import React, { useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import heart from '../assets/images/heart.png'

const ScoreTest = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  const { yourName, partnerName, randomNumber1, randomNumber2 } = location.state || { yourName: '', partnerName: '' };


  return (
    <>
      <Navbar />
      <div className='score_test-container ogtestpart1-container'>
        <h1>Original Internet Love Test (Score)</h1>
        <p>You've done it, {yourName}. Below, you'll find your test results. Now you've got several options... You can choose another test for even more insight into your personality/relationship or check the LoveThermometer to see how hot your relationship is.</p>

        <h2>LoveTest Results for</h2>
        <h2>{yourName} & {partnerName}</h2>
        <div className="center-image">
          <img src={heart} alt="" />
        </div>
        <h2>LoveTest Questionnaire Analysis:</h2>
        <h2>{partnerName} loves you, {yourName}!</h2>

        <p>There are always ups and downs in every relationship. Although you think you know a lot about your partner already, you might want to spend some more quality time together. <span>Love, trust, understanding, affection, honesty, tolerance and loyalty</span> are very important factors for a successful relationship. Think about what's still missing in your relationship and how you could improve it.</p>

        <p>This result is based on the answers which you selected in the LoveTest questionnaire. Please check out the quizzes in the <NavLink to='/QuizCentral'>QuizCentral</NavLink> for more indepth quizzes and extended results.</p>

        <h2>Numerology Analysis</h2>
        <h2>{yourName} is {randomNumber1} %  compatible with {partnerName}</h2>
        <h2>{partnerName} is {randomNumber2} %  compatible with {yourName}</h2>

        <p>These percentages are based on the names which you entered at the beginning of the LoveTest. To get the most accurate results, you should always provide the first, middle and last name. You can also take the <NavLink to='/LoveThermometer'>LoveThermometer</NavLink> for a more indepth analysis of various aspects of your relationship.</p>

      </div>
      <Footer />
    </>
  )
}

export default ScoreTest
