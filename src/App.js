import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio/Portfolio'
import PortfolioDetail from './pages/Portfolio/PortfolioDetail'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import $ from 'jquery'
import './css/common.css'

window.$ = $;

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/portfolioDetail" element={<PortfolioDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
