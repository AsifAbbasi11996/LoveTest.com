import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/OriginalLoveTestPart1.css'
import Navbar from './Navbar'
import Footer from './Footer'

const OriginalLoveTestPart1 = () => {

  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;


  const location = useLocation();

  const navigateToHome = useNavigate();

  const handleClick = () => {
    navigateToHome('/ScoreTest', { state: { yourName, partnerName, randomNumber1, randomNumber2 } });
  };

  const { yourName, partnerName } = location.state || { yourName: '', partnerName: '' };

  return (
    <div>
      <Navbar />
      <div className="ogtestpart1-container">
        <h1>Original Love Test</h1>
        <h2>Personal questionnaire for {yourName} & {partnerName}</h2>
        <p className='italic'>Please answer the questions below. While answering, we hope that you also get some starting points to think about your relationship.</p>
        <p>Ok, some of the questions might not make very much sense for you now, however they are necessary for the compatibility test: they make sense when combined with the answers of the other questions. There are questions which analyze how well you know the other person, how you feel about your partner as well as other compatibility questions.</p>
        <p>Answer each question and click the "Continue..." button at the end. Remember that none of the answers are right or wrong, just select the one that best fits you. After taking the full quiz, you'll see how your relationship scores on a general level and how compatible you are on a numerology and astrology level.</p>


        <div className="form-container">

          <form onSubmit={handleClick} className="form">
            <div className="form1 box">
              <h2>1. {yourName}, do you think {partnerName} is beautiful?</h2>
              <input type="radio" name='A1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='A1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='A1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>2. Does she know you?</h2>
              <input type="radio" name='B1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='B1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='B1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>3. Does she have a moped, motorcycle or a car?</h2>
              <input type="radio" name='C1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='C1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='C1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>4. Has she already sent you a letter/email/text?</h2>
              <input type="radio" name='D1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='D1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='D1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>5. Do you know where {partnerName} lives?</h2>
              <input type="radio" name='E1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='E1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='E1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>6. Has she given a present to you?</h2>
              <input type="radio" name='F1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='F1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='F1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>7. Have you already been away with {partnerName}?</h2>
              <input type="radio" name='G1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='G1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='G1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>8. Does she know where you live, {yourName}?</h2>
              <input type="radio" name='H1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='H1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='H1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />
            </div>

            <div className="form2 box">
              <h2>9. Does she know where you live, {yourName}?</h2>
              <input type="radio" name='I1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='I1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='I1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>10. Have you ever had a date with {partnerName}?</h2>
              <input type="radio" name='J1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='J1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='J1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>11. Have you brought her home already?</h2>
              <input type="radio" name='K1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='K1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='K1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>12. Have you hugged her already?</h2>
              <input type="radio" name='L1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='L1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='L1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>13. {yourName}, do you love her?</h2>
              <input type="radio" name='M1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='M1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='M1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>14. {yourName}, would you cry for {partnerName}?</h2>
              <input type="radio" name='N1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='N1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='N1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>15. Does she know that you are in love with her?</h2>
              <input type="radio" name='O1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='O1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='O1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />

              <h2>16. Does she mean a lot to you?</h2>
              <input type="radio" name='P1' value='1' />
              <label htmlFor="">Yes</label>
              <input type="radio" name='P1' value='2' />
              <label htmlFor="">Not</label>
              <input type="radio" name='P1' value='3' />
              <label htmlFor="">Not Sure</label><br /><br />
            </div>

          </form>

          <div className="btn">
            <button onClick={handleClick}><NavLink to='/ScoreTest'>Continue</NavLink></button>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default OriginalLoveTestPart1
