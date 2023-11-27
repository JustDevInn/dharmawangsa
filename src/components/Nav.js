import React from 'react';
// import components
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';


function Nav() {

  return (
    <header className='bg-gradient-to-b from-white to-transparent
     fixed w-full px-[30px] 
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex
    items-center'>
      <div className="flex flex-col lg:flex-row 
      lg:items-center w-full justify-between">
        {/* logo */}
        <Link to="/"
        className='max-w-[200px] text-xl md:text-4xl font-bold tracking-[5px] lg:tracking-[10px] uppercase'>
          <h1>Dharmawangsa</h1>
        </Link>
        {/* nav initially hidden - show on desktop */}
        <nav className='hidden lg:flex gap-12 font-extralight
         uppercase'>
        <Link to='/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black
          transition'
          >Home
        </Link>
        <Link to='/about/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black 
          transition'
          >About
        </Link>
        <Link to='/donate/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black 
          transition'
          >Donate
        </Link>
        <Link to='/contact/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black 
          transition'
          >Contact
        </Link>
        </nav>
      </div>
        {/* mobile nav */}
        <MobileNav />
    </header>
  );
}

export default Nav;