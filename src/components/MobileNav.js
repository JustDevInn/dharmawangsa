import React, {useState} from 'react';
// import icons
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
// import link
import {Link} from 'react-router-dom';
// import motion
import {motion} from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6,0.01, -0.05, 0.9],
    },
  },
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to close the menu
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className='text-primary lg:hidden'>
      {/* nav open button */}
      <div 
        onClick={() => setOpenMenu(true)} 
        className='text-3xl cursor-pointer'
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div 
        variants={menuVariants} 
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        {/* icon */}
        <div 
          onClick={handleCloseMenu} 
          className='text-4xl absolute z-30 left-4 top-14 text-black cursor-pointer'
        >
          <IoMdClose/>
        </div>
        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-black font-thin uppercase tracking-widest text-3xl'>
          <li>
            <Link onClick={handleCloseMenu} to='/#toppage' smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/about/#toppage' smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/donate/#toppage' smooth={true} duration={500}>Donate</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/contact/#toppage' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
