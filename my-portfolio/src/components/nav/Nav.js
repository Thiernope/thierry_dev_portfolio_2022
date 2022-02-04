import React from 'react';
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import { useDarkMode } from '../../Hooks/useDarkMode';
import "./nav.css"
const Nav = () => {
 const { colorTheme , setTheme } = useDarkMode();
  return (
    <div className ="px-3 py-4 sm:px-8 backdrop-blur-md z-50 sticky top-0 flex justify-between items-center">
      <Link to = "/menu" className="lg:hidden text-gray-900 dark:text-gray-400">
      < FaIcons.FaBars/>
      </Link>
      <Link to="/" className="hidden lg:block text-gray-900 dark:text-gray-400">T_250</Link>
  
       <div className="scrolling">
           <h1 className="text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700">Thank you for chacking out my site</h1>
      </div>
      
      <span className="bg-blue-5ds00 rounded-full p-2 cursor-pointer" onClick = {()=> setTheme(colorTheme)}> { colorTheme === "light" ? 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg> :

      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg> }
      </span>
    </div>
  );
}

export default Nav;
