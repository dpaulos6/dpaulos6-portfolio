import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import { Analytics } from "@vercel/analytics/react";

// Pages
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/AboutMe";
import FastOrder from "./pages/Projects/FastOrder";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects/FastOrder" element={<FastOrder />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
