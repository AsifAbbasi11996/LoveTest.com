import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const LoveThermometerResults = () => {

    const location = useLocation();

    const { yourName, partnerName} = location.state || { yourName: '', partnerName: '' }

    return (
        <>
            <Navbar />
            <div className="love-thermometer-results ogtestpart1-container">
                <h1>Love Thermometer</h1>
                <div className="container">
                    <div className="one">
                        <h2>LoveTest Calculator Results for :</h2>
                        <h2>{yourName} & {partnerName} </h2>
                        <h2>percent compatible</h2>
                        <div className="progress-bar">

                        </div>
                        <p>This percentage shows how much</p>
                        <p>{yourName} likes {partnerName}</p>
                    </div>
                    <div className="two">

                        <p>Paragraph by api</p>
                        <p>Zodiac sign by api</p>
                        <p>Zodiac sign by api</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoveThermometerResults
