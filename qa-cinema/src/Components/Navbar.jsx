import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../qa.png"

function Navbar() {
  return (
    <nav>
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <img src={logo} alt='qa cinema logo'></img>
        </li>
        <li class="flex-1 mr-2">
          <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-pearl-aqua hover:bg-blue-700 text-black" href="/">Home</a>
        </li>
        <li class="flex-1 mr-2">
          <a class="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/films">Films</a>
        </li>
        <li class="flex-1 mr-2">
          <a class="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/location">Location</a>
        </li>
        <li class="flex-1 mr-2">
          <a class="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/book">Book</a>
        </li>
        <li class="flex-1 mr-2">
          <a class="text-center block border border-white rounded hover:border-japanese-indigo-200 text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/gallery">Gallery</a>
        </li>
        <li>
          <p>Search</p>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;