import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Location from './Components/Location';
import Footer from './Components/Footer';
import OpenHrs from './Components/OpenHrs';
import Gallery from './Components/Gallery';
import ContactForm from './Components/ContactForm';
import MovieRatings from './Components/MovieRatings';
import { BookingController } from './Components/BookingController';


function App() {
  //to do:
  //fix navbar button??? things
  //location embedded
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/gallery' element={<BookingController/>}></Route>
      <Route path='/opening-hours' element={<OpenHrs/>}></Route>
      <Route path='/location' element={<Location/>}></Route>
      <Route path='/contact-form' element={<ContactForm/>}></Route>
      <Route path='/classifications' element={<MovieRatings/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
