import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [email, setEmail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    localStorage.clear()
    window.location.reload();
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home + {email}
                </Link>
                <Link
                  to="/films"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Film
                </Link>
                <Link
                  to="/location"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Location
                </Link>
                <Link
                  to="/films"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Book
                </Link>
                <Link
                  to="/discussion-board"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Forum
                </Link>
              </div>
            </div>
          </div>
          {email !== null && (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            {/* Avatar Button */}
            <div className="ml-3 relative">
              <div>
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://source.unsplash.com/random"
                    alt="User"
                  />
                </button>
              </div>
              {/* Dropdown menu */}
              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </Link>
                  <Link
                    onClick={signOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {email === null && (
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <Link to="/signin">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}

          <div className="-mr-2 flex md:hidden">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home 
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://source.unsplash.com/random"
                  alt="User"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  John Doe
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  {email}
                </div>
              </div>
              <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Your Profile
              </Link>
              <Link
                onClick={() => signOut()}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
