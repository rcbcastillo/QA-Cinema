import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../qa.png"

function Navbar() {
  return (
    <nav>
      <div>
        <p className='nav-a'>
          <Link to = "/"><img id = "logo" src={logo} alt="cinema logo"></img></Link>
        </p>
        <p className='nav-a'>
          <Link to="/">Films</Link>
        </p>
        <p className='nav-a'>
          <Link to="/location">Location</Link>
        </p>
        <p className='nav-a'>
          <Link to="/">Book</Link>
        </p>
        <p className='nav-a'>
          <Link to="/">Discussion Board</Link>
        </p>

        <form className='nav-a'>
          <input className='nav-a' type="text" name="search">
          </input>
        </form>

      {/* <p>Search <BsSearch/></p>
       */}
      {/* <form>
          <input type="text" name="name" placeholder='Search' /><BsSearch/>
      </form> */}



      </div>
    </nav>
  );
}

export default Navbar;