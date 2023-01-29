import { React, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import FastOrder from './pages/Projects/FastOrder'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor';
import Tabs from "./components/Tabs";
import styled from "styled-components";

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
        </Routes>
      </Router>
      <Footer/>
      <Cursor/>

      {/* <div>
        <Tabs />
      </div> */}

    </>
  );
}

export default App