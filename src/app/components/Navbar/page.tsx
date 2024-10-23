'use client'; // Make this a client component
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing toggle icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/closenp
  };

  return (
    <header className='bg-orange-900 text-white py-6 mr-0 fixed w-full z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <h2 className='italic text-3xl font-bold mr-2 '>!AlishbaRehman!</h2>

        {/* Toggle Icon for mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white p-2'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static w-full bg-orange-900 transition-all duration-300 ease-in ${
            isOpen ? 'top-16' : '-top-40'
          } md:top-0`}
        >
          <ul className='flex flex-col md:flex-row md:gap-x-20 text-2xl text-white md:ml-auto md:mr-0 md:justify-end'>
            <li>
              <Link
                href='/'
                className='hover:bg-orange-700 rounded brightness-95 p-2'
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='hover:bg-orange-700 rounded p-2'
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='hover:bg-orange-700 rounded p-2'
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
