import React from 'react';
import Typical from "react-typical"

import fileDownload from "js-file-download";
import axios from "axios"
const Experience = () => {
  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  
  
  return (
    <div>
      <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["My Experience", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>
    <div className="mt-10 md:mt-0 p-3 w-full rounded-md sm:border sm:border-gray-500 sm:border sm:hover:border-dotted  sm:flex justify-around items-center sm:pt-20 sm:pb-20">
        <div className="sm:flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">3 years</h1>
          <h1 className="font-bold text-2xl lg:text-2xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">of</h1>
          <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">Experience</h1>
        </div>

    <div className="mt-6 sm:mt-0 sm:flex flex-col justify-around items-center ">
      <h1 className="font-semibold text-2xl lg:text-2xl mb-3 text-gray-900 dark:text-gray-400 transition ease-in duration-700">Download my CV</h1>
      <svg onClick = {()=> handleClick("https://gentle-ocean-34517.herokuapp.com/download-pdf", "thierry_cv.pdf")} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-14 h-14 border border-gray-400 hover:border-dotted rounded-md md:mt-10 md:h-28 md:w-28 text-gray-900 dark:text-gray-400 transition ease-in duration-700" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
    </svg>
    </div>
    </div>
    </div>
  );
}

export default Experience;
