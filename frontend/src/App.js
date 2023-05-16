import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Location from './Components/Location';
import Footer from './Components/Footer';
import OpenHrs from './Components/OpenHrs';
import ContactForm from './Components/ContactForm';
import NavbarComponent from './Components/NavbarComponent';
import Users from './Components/Users';
import SignUp from './Components/SignUp';

function App() {
  //to do:
  //fix navbar button??? things
  //location embedded
  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/location' element={<Location/>}></Route>
      <Route path='/opening-hours' element={<OpenHrs/>}></Route>
      <Route path='/contact-form' element={<ContactForm/>}></Route>
      <Route path='/user' element={<Users/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
