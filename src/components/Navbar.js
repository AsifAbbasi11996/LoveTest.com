import React from 'react'
import '../assets/css/Navbar.css'
import { NavLink } from 'react-router-dom'
import img from '../assets/images/lovetest-logo-trans.png';
import aries from '../assets/images/aries.png';
import taurus from '../assets/images/taurus.png';
import gemini from '../assets/images/gemini.png';
import cancer from '../assets/images/cancer.png';
import leo from '../assets/images/leo.png';
import virgo from '../assets/images/virgo.png';
import libra from '../assets/images/libra.png';
import scorpio from '../assets/images/scorpio.png';
import sagittarius from '../assets/images/sagittarius.png';
import capricorn from '../assets/images/capricorn.png';
import aquarius from '../assets/images/aquarius.png';
import pisces from '../assets/images/pisces.png';

const Navbar = () => {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="nav">
                <div className="navbar">
                    <ul className='flex'>
                        <li><NavLink to='/'><img src={img} alt="" /></NavLink></li>
                        <li className='sub-nav'><NavLink to='/QuizCentralPage'>Quiz Central</NavLink>
                            <ul className='dropdown'>
                                <li><NavLink to='/OriginalLoveTest'>Original Love Test</NavLink></li>
                                <li><NavLink to='/NumerologyAnalysis' >Numerology Analysis</NavLink></li>
                                <li><NavLink to='/LoveFortune'>Love Fortune Teller</NavLink></li>
                                <li><NavLink to='/LoveThermometer'>Love Thermomemter</NavLink></li>
                                <li><NavLink to='/QuizCentralPage'>More..</NavLink></li>
                            </ul>
                        </li>
                        <li className='sub-nav'><NavLink to='/Compatibility'>Compatibility</NavLink>
                            <ul className='dropdown'>
                                <li><NavLink><img src={aries} />Aries</NavLink></li>
                                <li><NavLink><img src={taurus} />Taurus</NavLink></li>
                                <li><NavLink><img src={gemini} />Gemini</NavLink></li>
                                <li><NavLink><img src={cancer} />Cancer</NavLink></li>
                                <li><NavLink><img src={leo} />Leo</NavLink></li>
                                <li><NavLink><img src={virgo} />Virgo</NavLink></li>
                                <li><NavLink><img src={libra} />Libra</NavLink></li>
                                <li><NavLink><img src={scorpio} />Scorpio</NavLink></li>
                                <li><NavLink><img src={sagittarius} />Sagittarius</NavLink></li>
                                <li><NavLink><img src={capricorn} />Capricorn</NavLink></li>
                                <li><NavLink><img src={aquarius} />Aquarius</NavLink></li>
                                <li><NavLink><img src={pisces} />Pisces</NavLink></li>
                            </ul>
                        </li>
                        <li className='sub-nav'><NavLink to='/AboutPage'>About</NavLink>
                            <ul className="dropdown">
                                <li><NavLink to='/AboutPage'>About Love Test</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="menu-bar">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
