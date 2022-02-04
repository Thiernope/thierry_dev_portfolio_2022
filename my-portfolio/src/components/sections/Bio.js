import React from 'react'
import {HashLink} from "react-router-hash-link"
import Typical from "react-typical"
import Lottie from "react-lottie"
import designer from "../../assets/designer.json"
const Bio = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: designer,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


  return (
    <div className=" sm:h-full lg:h-screen 2xl:h-full w-full md:grid grid-cols-2 content-center bg-whitesmoke dark:bg-gray-900 transition ease-in duration-700">
    <div className="bg-whitesmoke dark:bg-gray-900 ease-in duration-700">
    <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
        steps={
          ["Hi 👋", 3000, "About Me", 3000]
        }
        loop ={Infinity}
        wrapper = "p"
        /></h1>
         <h1 className="gr mt-10 md:mt-0 font-semibold text-2xl lg:text-4xl mb-3">I'm Thierry</h1>
         <h1 className="font-bold text-5xl lg:text-7xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 mt-3">React</h1><br/>
         <h1 className="font-bold text-5xl lg:text-7xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 -mt-3">Developer</h1>
         <p className="max-w-sm mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
         I am an aspiring web developer with 3 years of experience as a React Developer.
         I build websites that delight and inform. I do it well.
         </p>
         <HashLink smooth to="/#contact">
         <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Hire me!</button>
       </HashLink>
        </div>

        <div className="">
        <Lottie options={defaultOptions}
           className="lottie"
           height={350}
           width={350}
         />
        </div>
    </div>
  )
}

export default Bio