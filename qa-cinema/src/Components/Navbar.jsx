import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../qa.png"

function Navbar() {
  return (
    <nav>
      <div className='nav'>
      <ul>
        <li>
          <Link to = "/"><img src={logo} alt="The poster"></img></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Discussion Board</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact-form">Contact Us</Link>
        </li>
        <li>
          <Link to="/opening-hours">Opening Hours</Link>
        </li> 
        <li>
          <Link to="/gallery">Films</Link>
        </li>
        <li>
          <Link to="/">Location</Link>
        </li>
        <li>
          <Link to="/">Book</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;