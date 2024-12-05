import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/OriginalLoveTestPart1.css'
import Navbar from './Navbar'
import Footer from './Footer'

const OriginalLoveTestPart1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;


  const location = useLocation();

  const navigateToHome = useNavigate();

  const handleClick = () => {
    if (yourName === '' && partnerName === '') {
      alert('Please fill your name and partner name')
    } else {
      navigateToHome('/ScoreTest', { state: { yourName, partnerName, randomNumber1, randomNumber2 } });
    }
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
              <input type="radio" id="A1_yes" name="A1" value="1" />
              <label htmlFor="A1_yes">Yes</label>
              <input type="radio" id="A1_not" name="A1" value="2" />
              <label htmlFor="A1_not">Not</label>
              <input type="radio" id="A1_notSure" name="A1" value="3" />
              <label htmlFor="A1_notSure">Not Sure</label><br /><br />

              <h2>2. Does she know you?</h2>
              <input type="radio" id="B1_yes" name="B1" value="1" />
              <label htmlFor="B1_yes">Yes</label>
              <input type="radio" id="B1_not" name="B1" value="2" />
              <label htmlFor="B1_not">Not</label>
              <input type="radio" id="B1_notSure" name="B1" value="3" />
              <label htmlFor="B1_notSure">Not Sure</label><br /><br />

              <h2>3. Does she have a moped, motorcycle or a car?</h2>
              <input type="radio" id="C1_yes" name="C1" value="1" />
              <label htmlFor="C1_yes">Yes</label>
              <input type="radio" id="C1_not" name="C1" value="2" />
              <label htmlFor="C1_not">Not</label>
              <input type="radio" id="C1_notSure" name="C1" value="3" />
              <label htmlFor="C1_notSure">Not Sure</label><br /><br />

              <h2>4. Has she already sent you a letter/email/text?</h2>
              <input type="radio" id="D1_yes" name="D1" value="1" />
              <label htmlFor="D1_yes">Yes</label>
              <input type="radio" id="D1_not" name="D1" value="2" />
              <label htmlFor="D1_not">Not</label>
              <input type="radio" id="D1_notSure" name="D1" value="3" />
              <label htmlFor="D1_notSure">Not Sure</label><br /><br />

              <h2>5. Do you know where {partnerName} lives?</h2>
              <input type="radio" id="E1_yes" name="E1" value="1" />
              <label htmlFor="E1_yes">Yes</label>
              <input type="radio" id="E1_not" name="E1" value="2" />
              <label htmlFor="E1_not">Not</label>
              <input type="radio" id="E1_notSure" name="E1" value="3" />
              <label htmlFor="E1_notSure">Not Sure</label><br /><br />

              <h2>6. Has she given a present to you?</h2>
              <input type="radio" id="F1_yes" name="F1" value="1" />
              <label htmlFor="F1_yes">Yes</label>
              <input type="radio" id="F1_not" name="F1" value="2" />
              <label htmlFor="F1_not">Not</label>
              <input type="radio" id="F1_notSure" name="F1" value="3" />
              <label htmlFor="F1_notSure">Not Sure</label><br /><br />

              <h2>7. Have you already been away with {partnerName}?</h2>
              <input type="radio" id="G1_yes" name='G1' value='1' />
              <label htmlFor="G1_yes">Yes</label>
              <input type="radio" id="G1_not" name='G1' value='2' />
              <label htmlFor="G1_not">Not</label>
              <input type="radio" id="G1_notSure" name='G1' value='3' />
              <label htmlFor="G1_notSure">Not Sure</label><br /><br />

              <h2>8. Does she know where you live, {yourName}?</h2>
              <input type="radio" id="H1_yes" name='H1' value='1' />
              <label htmlFor="H1_yes">Yes</label>
              <input type="radio" id="H1_not" name='H1' value='2' />
              <label htmlFor="H1_not">Not</label>
              <input type="radio" id="H1_notSure" name='H1' value='3' />
              <label htmlFor="H1_notSure">Not Sure</label><br /><br />
            </div>

            <div className="form2 box">
              <h2>9. Does she know where you live, {yourName}?</h2>
              <input type="radio" id="I1_yes" name='I1' value='1' />
              <label htmlFor="I1_yes">Yes</label>
              <input type="radio" id="I1_not" name='I1' value='2' />
              <label htmlFor="I1_not">Not</label>
              <input type="radio" id="I1_notSure" name='I1' value='3' />
              <label htmlFor="I1_notSure">Not Sure</label><br /><br />

              <h2>10. Have you ever had a date with {partnerName}?</h2>
              <input type="radio" id="J1_yes" name='J1' value='1' />
              <label htmlFor="J1_yes">Yes</label>
              <input type="radio" id="J1_not" name='J1' value='2' />
              <label htmlFor="J1_not">Not</label>
              <input type="radio" id="J1_notSure" name='J1' value='3' />
              <label htmlFor="J1_notSure">Not Sure</label><br /><br />

              <h2>11. Have you brought her home already?</h2>
              <input type="radio" id="K1_yes" name='K1' value='1' />
              <label htmlFor="K1_yes">Yes</label>
              <input type="radio" id="K1_not" name='K1' value='2' />
              <label htmlFor="K1_not">Not</label>
              <input type="radio" id="K1_notSure" name='K1' value='3' />
              <label htmlFor="K1_notSure">Not Sure</label><br /><br />

              <h2>12. Have you hugged her already?</h2>
              <input type="radio" id="L1_yes" name='L1' value='1' />
              <label htmlFor="L1_yes">Yes</label>
              <input type="radio" id="L1_not" name='L1' value='2' />
              <label htmlFor="L1_not">Not</label>
              <input type="radio" id="L1_notSure" name='L1' value='3' />
              <label htmlFor="L1_notSure">Not Sure</label><br /><br />

              <h2>13. {yourName}, do you love her?</h2>
              <input type="radio" id="M1_yes" name='M1' value='1' />
              <label htmlFor="M1_yes">Yes</label>
              <input type="radio" id="M1_not" name='M1' value='2' />
              <label htmlFor="M1_not">Not</label>
              <input type="radio" id="M1_notSure" name='M1' value='3' />
              <label htmlFor="M1_notSure">Not Sure</label><br /><br />

              <h2>14. {yourName}, would you cry for {partnerName}?</h2>
              <input type="radio" id="N1_yes" name='N1' value='1' />
              <label htmlFor="N1_yes">Yes</label>
              <input type="radio" id="N1_not" name='N1' value='2' />
              <label htmlFor="N1_not">Not</label>
              <input type="radio" id="N1_notSure" name='N1' value='3' />
              <label htmlFor="N1_notSure">Not Sure</label><br /><br />

              <h2>15. Does she know that you are in love with her?</h2>
              <input type="radio" id="O1_yes" name='O1' value='1' />
              <label htmlFor="O1_yes">Yes</label>
              <input type="radio" id="O1_not" name='O1' value='2' />
              <label htmlFor="O1_not">Not</label>
              <input type="radio" id="O1_notSure" name='O1' value='3' />
              <label htmlFor="O1_notSure">Not Sure</label><br /><br />

              <h2>16. Does she mean a lot to you?</h2>
              <input type="radio" id="P1_yes" name='P1' value='1' />
              <label htmlFor="P1_yes">Yes</label>
              <input type="radio" id="P1_not" name='P1' value='2' />
              <label htmlFor="P1_not">Not</label>
              <input type="radio" id="P1_notSure" name='P1' value='3' />
              <label htmlFor="P1_notSure">Not Sure</label><br /><br />
            </div>

          </form>

          <div className="btn">
            <button onClick={handleClick}>Continue</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default OriginalLoveTestPart1
