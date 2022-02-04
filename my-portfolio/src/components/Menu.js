import React from 'react'
import { HashLink } from 'react-router-hash-link'
const MenuDesktop = () => {
  return (
    <div className="">
    <aside className="w-64" aria-label="Sidebar">
<div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-900 transition ease-in duration-700">
  <ul className="space-y-2">
     <li>
     <HashLink smooth to="/#about" className="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="w-6 h-6 text-gray-500 transition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
           <span class="ml-3">About</span>
        </HashLink>
     </li>
  
     <li>
        <HashLink smooth to="/#skills" className="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="flex-shrink-0 w-6 h-6 text-gray-500 ttransition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
           <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
           <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
        </HashLink>
     </li>
     <li>
     <HashLink smooth to="/#projects" className="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
           <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
           <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">6</span>
        </HashLink>
     </li>
     <li>
        <HashLink smooth to="/#experience" className="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
           <span className="flex-1 ml-3 whitespace-nowrap">Experience</span>
           <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">3 years</span>
        </HashLink>
     </li>
     <li>
     <HashLink smooth to="/#articles" className="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
           <span className="flex-1 ml-3 whitespace-nowrap">Articles</span>
           <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">4</span>
        </HashLink>
     </li>
     <li>

     <HashLink smooth to="/#contact" class="hover:bg-gray-200 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
           <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition ease-in duration-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
           <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
        </HashLink>
     </li>
  </ul>
</div>
</aside>
    </div>
  )
}

export default MenuDesktop