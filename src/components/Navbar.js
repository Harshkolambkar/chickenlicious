import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [justifyContent, setJustifyContent] = useState('justify-center');
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [toggleMobileDropdown, setToggleMobileDropdown] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 779) {
        setShowMenuIcon(true);
        setJustifyContent('justify-between');
      } else {
        setShowMenuIcon(false);
        setJustifyContent('justify-center');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menu = () => {
    setMenuBar(!menuBar);
    setToggleNavbar(!toggleNavbar)
  };
  const Dropdown = ()=>{
    setToggleDropdown(!toggleDropdown)
  }
  const mobileDropdown = ()=>{
    setToggleMobileDropdown(!toggleMobileDropdown)
  }

  return (
    <>
      <nav className={`flex ${justifyContent} shadow-md`}>
      <h1>Title</h1>
      {!showMenuIcon && (
        <ul className="flex space-x-5 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={Dropdown} className='cursor-pointer flex items-center'> DropDown <IoMdArrowDropdown /> </li>
          {toggleDropdown && (
            <div className="absolute top-16 left-[56%] w-56 border-1 rounded h-14 flex items-center bg-slate-200">
              <div className='flex items-center space-x-2 mx-auto bg-white rounded-md h-fit border-1 shadow-md'>
                <FaSearch className='text-black mx-1'/>
                <input className='mx-1' placeholder='Search... '/>
              </div>
            </div>
          )}
        </ul>
      )}
      {showMenuIcon && (
        <div className="menu-icon p-3 flex-row-reverse cursor-pointer" onClick={menu}>
          <div className={`bar1 w-9 h-1 bg-black my-1 duration-500 ${menuBar ? 'transform-bar1' : ''}`}></div>
          <div className={`bar2 w-9 h-1 bg-black my-1 duration-500 ${menuBar ? 'transform-bar2' : ''}`}></div>
          <div className={`bar3 w-9 h-1 bg-black my-1 duration-500 ${menuBar ? 'transform-bar3' : ''}`}></div>
        </div>
      )}
    </nav>
    {toggleNavbar && showMenuIcon &&(
      <ul className="mobile-menu flex flex-col w-full space-y-2 items-center h-40">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        <li className='flex items-center' onClick={mobileDropdown}> DropDown <IoMdArrowDropdown /> </li>
          {toggleMobileDropdown && (
            
            <div className='flex items-center space-x-2 mx-auto bg-white rounded-md h-fit border-1 shadow-md'>
              <FaSearch className='text-black mx-1'/>
              <input className='mx-1' placeholder='Search... '/>
            </div>
          
          )}
      </ul>
    )}
    
    </>
  );
} 