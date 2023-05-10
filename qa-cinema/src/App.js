import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import OpenHrs from './Components/OpenHrs';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/opening-hours' element={<OpenHrs/>}></Route>
      <Route path='/contact-form' element={<ContactForm/>}></Route>
    </Routes>
    
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
