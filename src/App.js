import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax';

// Pages
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import FastOrder from './pages/Projects/FastOrder'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Projects/FastOrder' element={<FastOrder/>} />
          if () {
            
          }
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App