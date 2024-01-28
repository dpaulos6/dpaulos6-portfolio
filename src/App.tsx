import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './global.css'

// Pages
import Home from './pages/Home.tsx'
import AboutMe from './pages/AboutMe'
import Testing from './pages/Testing'
import Projects from './pages/Projects'
import FastOrder from './pages/Projects/FastOrder'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/Testing' element={<Testing/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Projects/FastOrder' element={<FastOrder/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}