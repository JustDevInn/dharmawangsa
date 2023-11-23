import React from 'react';
// import router
import  {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
// import pages
import Home from  './pages/Home'
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;