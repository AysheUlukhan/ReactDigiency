import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";

const Navbar = () => {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    // <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="about-us">AboutUs</Link>
    //     <Link to="blog">Blog</Link>

    // </nav>


<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-BlackOlive">
  <div className="container flex flex-wrap items-center justify-around mx-auto">
  <h1 className='text-2xl font-bold mr-4 sm:text-3xl text-mysticRed'>Digi<span className='text-onyx dark:text-white'>ency</span></h1>
  
  <div className="flex md:order-2">
      
  <i className="fa-light fa-sun-bright dark:text-white inline-flex items-center" onClick={handleThemeSwitch}></i>
  <i className="fa-regular fa-brightness dark:text-white inline-flex items-center" onClick={handleThemeSwitch}></i>
  <i className="fa-regular fa-sun dark:text-white inline-flex items-center" onClick={handleThemeSwitch}></i>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-BlackOlive md:dark:bg-BlackOlive dark:border-BlackOlive ">
        <NavLink className={"block py-2 pl-3 pr-4 text-mysticRed bg-text-mysticRed rounded md:bg-transparent md:text-text-mysticRed md:p-0 dark:text-mysticRed"} to="/">Home</NavLink>

        <NavLink className={"block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"} to="/">About Us</NavLink>

        <NavLink className={"block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"} to="/">Services</NavLink>
        
        <NavLink className={"block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"} to="/">Portfolio</NavLink>

        <NavLink className={"block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"} to="blog">Blog</NavLink>

        <NavLink className={"block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"} to="/">Contact Us</NavLink>



    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar