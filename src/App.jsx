import React, { useState, useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { GiHeraldicSun } from "react-icons/gi";

function App() {

  const [isOpen, setIsOpen] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  useEffect(() => {
    if (isOpen === 1) {
      setIsMenuOpen(1);
    } else if (isOpen === 2) {
      setIsMenuOpen(2);
    } else if (isOpen === 3) {
      setIsMenuOpen(3);
    } else if (isOpen === 4) {
      setIsMenuOpen(4);
    } else {
      setIsOpen(1);
    }
  }, [isOpen]);

  return (
    <div className=" bg-background w-full h-16 flex">
      <div className="h-full w-1/2 flex items-center ml-4 lg:ml-32">
        <img src="/logo-gwk.png" className="h-4 lg:h-6" alt="logo" />
        <p className='text-white font-semibold ml-2 text-[9px] lg:text-[14px]'>Fathur</p>
      </div>
      <div className="lg:flex lg:h-full lg:w-full lg:gap-7 lg:items-center lg:justify-center hidden ">
        <button className={`text-white font-semibold text-[14px] transition-colors duration-200 relative ${isOpen === 1 ? 'opacity-100 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white' : 'opacity-70 hover:opacity-100'}`} onClick={() => setIsOpen(1)}>Home</button>
        <button className={`text-white font-semibold  text-[14px] transition-colors duration-200 relative ${isOpen === 2 ? 'opacity-100 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white' : 'opacity-70 hover:opacity-100'}`} onClick={() => setIsOpen(2)}>Portofolio</button>
        <button className={`text-white font-semibold  text-[14px] transition-colors duration-200 relative ${isOpen === 3 ? 'opacity-100 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white' : 'opacity-70 hover:opacity-100'}`} onClick={() => setIsOpen(3)}>Testimoni</button>
        <button className={`text-white font-semibold  text-[14px] transition-colors duration-200 relative ${isOpen === 4 ? 'opacity-100 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white' : 'opacity-70 hover:opacity-100'}`} onClick={() => setIsOpen(4)}>About</button>
      </div>
      <div className="h-full w-1/2 flex gap-2 lg:gap-4 items-center justify-end mr-4 lg:mr-32">
        <FaLinkedinIn className="size-[13px] lg:size-[20px]" color='transparent' />
        <GiHeraldicSun className="size-[28px] lg:size-[38px] hover:animate-pulse" color='yellow' onClick={() => setIsOpen(1)} />
      </div>
    </div>
  );
}



export default App
