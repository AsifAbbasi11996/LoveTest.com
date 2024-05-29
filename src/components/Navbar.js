import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
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

    const [isOpen, setIsOpen] = React.useState(false);


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="nav">
                <div className="logo">
                    <NavLink to='/'><img src={img} alt="" /></NavLink>
                </div>
                <div className="navbar">
                    <ul className={click ? 'flex active' : 'flex'}>
                        <li className='sub-nav'><NavLink to='/QuizCentral'>Quiz Central</NavLink>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <i class="ri-arrow-down-s-line"></i>
                            </button>
                            {(
                                isOpen ?

                                    <ul className='dropdown'>
                                        <li><NavLink to='/OriginalLoveTest'>Original Love Test</NavLink></li>
                                        <li><NavLink to='/NumerologyAnalysis' >Numerology Analysis</NavLink></li>
                                        <li><NavLink to='/LoveFortune'>Love Fortune Teller</NavLink></li>
                                        <li><NavLink to='/LoveThermometer'>Love Thermomemter</NavLink></li>
                                        <li><NavLink to='/QuizCentralPage'>More..</NavLink></li>
                                    </ul>
                                    : null
                            )}

                        </li>
                        <li className='sub-nav'><NavLink to='/Compatibility' >Compatibility</NavLink>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <i class="ri-arrow-down-s-line"></i>
                            </button>
                            {(
                                isOpen ?
                                    <ul className='dropdown'>
                                        <li><NavLink to='/Aries'><img src={aries} />Aries</NavLink></li>
                                        <li><NavLink to='/Taurus'><img src={taurus} />Taurus</NavLink></li>
                                        <li><NavLink to='/Gemini'><img src={gemini} />Gemini</NavLink></li>
                                        <li><NavLink to='/Cancer'><img src={cancer} />Cancer</NavLink></li>
                                        <li><NavLink to='/Leo'><img src={leo} />Leo</NavLink></li>
                                        <li><NavLink to='/Virgo'><img src={virgo} />Virgo</NavLink></li>
                                        <li><NavLink to='/Libra'><img src={libra} />Libra</NavLink></li>
                                        <li><NavLink to='/Scorpio'><img src={scorpio} />Scorpio</NavLink></li>
                                        <li><NavLink to='/Sagittarius'><img src={sagittarius} />Sagittarius</NavLink></li>
                                        <li><NavLink to='/Capricorn'><img src={capricorn} />Capricorn</NavLink></li>
                                        <li><NavLink to='/Aquarius'><img src={aquarius} />Aquarius</NavLink></li>
                                        <li><NavLink to='/Pisces'><img src={pisces} />Pisces</NavLink></li>
                                    </ul>
                                    : null
                            )}

                        </li>
                        <li className='sub-nav'><NavLink to='/About'>About</NavLink>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <i class="ri-arrow-down-s-line"></i>
                            </button>
                            {(
                                isOpen ?
                                    <ul className="dropdown">
                                        <li><NavLink to='/AboutPage'>About Love Test</NavLink></li>
                                    </ul>
                                    : null
                            )}
                        </li>
                    </ul>
                </div>

                <div className="menu-bar" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: "white" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "black" }} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
