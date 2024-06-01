import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const LoveFortuneTeller = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [womanName, setWomanName] = useState('')
    const [bestFriends, setBestFriends] = useState('')
    const [wish, setWish] = useState('')

    const location = useLocation();

    const navigateToHome = useNavigate();

    const handleClick = () => {
        if (womanName === '' && bestFriends === '' && wish === '') {
            alert('Please fill all the fields')
        } else {
            navigateToHome('/LoveFortuneResults', { state: { yourName, partnerName, womanName, bestFriends, wish } });
        }
    };

    const { yourName, partnerName } = location.state || { yourName: '', partnerName: '' };


    return (
        <>
            <Navbar />
            <div className='love-fortune ogtestpart1-container'>
                <h1>Love Fortune Teller</h1>

                <div className="form questions">
                    <div className="form1 box">
                        <h2>1. {yourName}, please enter the name of a woman.</h2>
                        <input type="text" value={womanName}
                            onChange={(e) => setWomanName(e.target.value)} required /><br /><br />

                        <h2>2. What is your favorite color?</h2>
                        <select name="colors" id="">
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Grey</option>
                            <option value="">Black</option>
                            <option value="">Green</option>
                            <option value="">Yellow</option>
                            <option value="">Other</option>
                        </select><br /><br />

                        <h2>3. Please enter your first initial.</h2>
                        <input type="text" required /><br /><br />

                        <h2>4. {yourName}, select the month you were born in :</h2>
                        <select name="month" id="month">
                            <option value="">Month</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select><br /><br />

                        <h2>5. Which color do you prefer ?</h2>
                        <input type="radio" name='color' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Black</label>
                        <input type="radio" name='color' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">White</label>
                    </div>

                    <div className="form2 box">

                        <h2>6. Enter the name of your bestfriend ?</h2>
                        <input type="text" value={bestFriends} onChange={(e) => setBestFriends(e.target.value)} required /><br /><br />

                        <h2>7. What is your favorite number ?</h2>
                        <input type="text" required /><br /><br />

                        <h2>8. Which state do you prefer ?</h2>
                        <input type="radio" name='city' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Mumbai</label>
                        <input type="radio" name='city' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Delhi</label><br /><br />

                        <h2>9. Do you prefer the ocean or the lake?</h2>
                        <input type="radio" name='abc' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Ocean</label>
                        <input type="radio" name='abc' required />
                        &nbsp;&nbsp;
                        <label htmlFor="">Lake</label><br /><br />

                        <h2>10. Make a realistic wish...</h2>
                        <input type="text" value={wish} onChange={(e) => setWish(e.target.value)} required />
                    </div>
                </div>

                <div className="btn">
                    <button onClick={handleClick}>Continue</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoveFortuneTeller
