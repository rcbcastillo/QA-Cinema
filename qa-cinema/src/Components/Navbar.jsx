import React from 'react';
import logo from "../qa.png"

function Navbar() {
  return (
    <nav>
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <ul className="flex">
          <li className="flex-1 mr-2">
            <img src={logo} alt='qa cinema logo'></img>
          </li>
          <li className="nav-link flex-1 mr-2">
            <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-pearl-aqua hover:bg-blue-700 text-black" href="/">Home</a>
          </li>
          <li className="nav-link flex-1 mr-2">
            <a className="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/films">Films</a>
          </li>
          <li className="nav-link flex-1 mr-2">
            <a className="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/location">Location</a>
          </li>
          <li className="nav-link flex-1 mr-2">
            <a className="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/book">Book</a>
          </li>
          <li className="nav-link flex-1 mr-2">
            <a className="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/discussion">Forums</a>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;