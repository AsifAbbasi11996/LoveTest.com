import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar2.css'
import img from '../assets/images/lovetest-logo-trans.png'
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

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

      // Function to handle item click
  const handleItemClick = (item) => {
    console.log(`You selected ${item}`);
    setIsOpen(false); // Optionally close the dropdown after selection
  };

    //cj

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const scrollToSection = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            smoothScroll(targetY);
        }
    };

    const smoothScroll = (targetY) => {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const duration = 2000;
        let start;
        setClick(false);

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startY, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    return (
        <div>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <nav className="navbar2">
                <div className="logo">
                    <div className="main-logo">
                        <NavLink to='/'><img className="logo-image" src={img} alt="" /></NavLink>
                    </div>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" onClick={toggleDropdown}>
                        <NavLink to="/QuizCentralPage" onClick={() => scrollToSection("QuizCentral")}>Quiz Central<i class="ri-arrow-down-s-line"></i></NavLink>
                        <ul className='dropdown'>
                            <li><NavLink to='/OriginalLoveTest'>Original Love Test</NavLink></li>
                            <li><NavLink to='/NumerologyAnalysis' >Numerology Analysis</NavLink></li>
                            <li><NavLink to='/LoveFortune'>Love Fortune Teller</NavLink></li>
                            <li><NavLink to='/LoveThermometer'>Love Thermomemter</NavLink></li>
                            <li><NavLink to='/QuizCentralPage'>More..</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={toggleDropdown}>
                        <NavLink to="/CompatibilityPage" onClick={() => scrollToSection("Compatibility")}>Compatibility<i class="ri-arrow-down-s-line"></i></NavLink>
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
                    </li>
                    <li className="nav-item" onClick={toggleDropdown}>
                        <NavLink to="/AboutPage" onClick={() => scrollToSection("About")}>About<i class="ri-arrow-down-s-line"></i></NavLink>
                        <ul className="dropdown">
                            <li><NavLink to='/AboutPage'>About Love Test</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: "black" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "black" }} />
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar2
