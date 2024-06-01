import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const LoveFortuneResults = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();

    const { yourName, partnerName, womanName, bestFriends, wish } = location.state || { yourName: '', partnerName: '', womanName: '', bestFriends: '', wish: '' };

    return (
        <>
            <Navbar />
            <div className="love-fortune-results ogtestpart1-container">
                <h1>Love Fortune Results</h1>
                <h2>{yourName}, here's your love fortune result!</h2>
                <p>1. You are deeply in love with, or soon will be with {womanName}.</p>
                <p>2. You are a very alert person and your life is full of love.</p>
                <p>3. {yourName}, you have lots of love in your life and most likely you currently have a crush.</p>
                <p>4. You will have a good year over all and you will soon have a crush or you already do.</p>
                <p>5. You like parties and you are usually hyper.</p>
                <p>6. {bestFriends} is one of your best friends.</p>
                <p>7. It will take you 8 days to get together with {partnerName}.</p>
                <p>8. You like making out and parties.</p>
                <p>9. You are wild person and you love to make out</p>
                <p>10. Your Wish : "{wish}"</p>
                <p>This wish will only come true if you really believe in it! Telling other people about this LoveTest fortune teller might also help.</p>
            </div>
            <Footer />
        </>
    )
}

export default LoveFortuneResults
