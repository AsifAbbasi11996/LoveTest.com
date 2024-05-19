import React from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import QuizCentral from './components/QuizCentral';
import OriginalLoveTest from './components/OriginalLoveTest';
import About from './components/About';
import NumerologyAnalysis from './components/NumerologyAnalysis';
import LoveFortune from './components/LoveFortune';
import LoveThermometer from './components/LoveThermometer';
import Compatibility from './components/Compatibility';
import LoveCompatibility from './components/LoveCompatibility';
import Contact from './components/Contact';
import Aries from './components/Aries';
import Taurus from './components/Taurus';
import Gemini from './components/Gemini';
import Leo from './components/Leo';
import Libra from './components/Libra';
import Virgo from './components/Virgo';
import Scorpio from './components/Scorpio';
import Capricorn from './components/Capricorn';
import Aquarius from './components/Aquarius';
import Pisces from './components/Pisces';
import Cancer from './components/Cancer';
import Sagittarius from './components/Sagittarius';


// pages 

import QuizCentralPage from './pages/QuizCentralPage';
import AboutPage from './pages/AboutPage';


const App = () => {
  return (
    <>
      <Routes>

        {/* components */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path='/' element={<Home />} />
        <Route path='/quizcentral' element={<QuizCentral />} />
        <Route path='/OriginalLoveTest' element={<OriginalLoveTest />} />
        <Route path='/LoveThermometer' element={<LoveThermometer />} />
        <Route path="/NumerologyAnalysis" element={<NumerologyAnalysis />} />
        <Route path="/LoveFortune" element={<LoveFortune />} />
        <Route path="/Compatibility" element={<Compatibility />} />
        <Route path='/About' element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/lovecompatibility" element={<LoveCompatibility />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Aries' element={<Aries />} />
        <Route path='/Taurus' element={<Taurus />} />
        <Route path='/Gemini' element={<Gemini />} />
        <Route path='/Cancer' element={<Cancer />} />
        <Route path='/Leo' element={<Leo />} />
        <Route path='/Virgo' element={<Virgo />} />
        <Route path='/Libra' element={<Libra />} />
        <Route path='/Scorpio' element={<Scorpio />} />
        <Route path='/Sagittarius' element={<Sagittarius />} />
        <Route path='/Capricorn' element={<Capricorn />} />
        <Route path='/Aquarius' element={<Aquarius />} />
        <Route path='/Pisces' element={<Pisces />} />

        {/* pages */}
        <Route path='/quizcentralpage' element={<QuizCentralPage />} />
        <Route path='/AboutPage' element={<AboutPage />} />

      </Routes>
    </>
  )
}

export default App