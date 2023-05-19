import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pearl-aqua py-8">
      <div className="container mx-auto flex flex-wrap justify-evenly">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="text-japanese-indigo hover:bg-pearl-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
            <h4 className="text-lg">Useful Info</h4>
            <p className="text-japanese-indigo">Floor 19, 53 Portland St, Manchester M1 3LD</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col">
            <Link to="/about" className="text-japanese-indigo hover:bg-pearl-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
              About
            </Link>
            <Link to="/contact"className="text-japanese-indigo hover:bg-pearl-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col">
            <Link to="/opening-hours" className="text-japanese-indigo hover:bg-pearl-green hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Opening Hours
            </Link>
            <Link to="/classifications" className="text-japanese-indigo hover:bg-pearl-green hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Classifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
