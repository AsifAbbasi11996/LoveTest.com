// import React, { useState } from 'react';
import React from 'react';
import { Routes, Route} from "react-router-dom";

// components
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import QuizCentral from './components/QuizCentral';
import OriginalLoveTest from './components/OriginalLoveTest';
import NumerologyAnalysis from './components/NumerologyAnalysis';
import LoveFortune from './components/LoveFortune';
import LoveThermometer from './components/LoveThermometer';
import LoveCompatibility from './components/LoveCompatibility';
import Compatibility from './components/Compatibility';
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
import OriginalLoveTestPart1 from './components/OriginalLoveTestPart1';
import About from './components/About';
import ScoreTest from './components/ScoreTest';
import Contact from './components/Contact';
import NumerologyAnalysisPart1 from './components/NumerologyAnalysisPart1'
import LoveFortuneTeller from './components/LoveFortuneTeller';
import LoveFortuneResults from './components/LoveFortuneResults';
import LoveThermometerResults from './components/LoveThermometerResults';


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
          <Route path='/OriginalLoveTestPart1' element={<OriginalLoveTestPart1 />} />
          <Route path='/ScoreTest' element={<ScoreTest />} />
          <Route path='/NumerologyAnalysisPart1' element={<NumerologyAnalysisPart1/>} />
          <Route path='/LoveFortuneTeller' element={<LoveFortuneTeller/>}/>
          <Route path='/LoveFortuneResults' element={<LoveFortuneResults/>}/>
          <Route path='/LoveThermometerResults' element={<LoveThermometerResults/>}/>
          

          {/* pages */}
          <Route path='/quizcentralpage' element={<QuizCentralPage />} />
          <Route path='/AboutPage' element={<AboutPage />} />

        </Routes>
    </>
  )
}

export default App