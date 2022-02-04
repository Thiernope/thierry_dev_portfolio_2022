import React from 'react';
import Typical from "react-typical"
import "./Skills.css"
const CssView = ({showPolarAreaChart, showLineChart, showBarChart, showCssChart}) => {

  return (
    <div className="dark:bg-gray-900 transition ease-in duration-700">
         <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["My Skills", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>
 <div className="mt-10 md:mt-0 flex justify-start sm:justify-center">
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="mr-2" onClick={showPolarAreaChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PolarArea</p>
        </li>
        <li className="mr-2" onClick={showLineChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Line</p>
        </li>
        <li className="mr-2" onClick={showBarChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Bar</p>
        </li>
        <li className="mr-2" onClick={showCssChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500">CSS</p>
        </li>
    </ul>
</div>
</div>
       <div className="flex-1 bg-whitesmoke dark:bg-gray-900 transition ease-in duration-700">
       <div className="all-skills pt-8">
         <div className="skills">
                <h3 className="text-gray-900 dark:text-gray-400 transition ease-in duration-700">Coding skills</h3>
                <ul>
                    <li className ="html text-gray-900 dark:text-gray-400 transition ease-in duration-700">HTML<span className="percentage">90%</span></li>
                     <li className ="javascript text-gray-900 dark:text-gray-400 transition ease-in duration-700">CSS<span className="percentage">75%</span></li>
                     <li className ="vscode text-gray-900 dark:text-gray-400 transition ease-in duration-700">TailwindCSS<span className="percentage">70%</span></li>
                     <li className ="commandline text-gray-900 dark:text-gray-400 transition ease-in duration-700">Flowbite<span className="percentage">50%</span></li>
                     <li className ="node text-gray-900 dark:text-gray-400 transition ease-in duration-700">Node Js<span className="percentage">70%</span></li>
                     
                </ul>
            </div>
            <div className="skills">
               <h3 className="text-gray-900 dark:text-gray-400 transition ease-in duration-700">Other tech skills</h3>
                 <ul>
                     <li className ="ms text-gray-900 dark:text-gray-400 transition ease-in duration-700">React<span className="percentage">90%</span></li>
                     <li className ="google text-gray-900 dark:text-gray-400 transition ease-in duration-700">Material UI <span className="percentage">75%</span></li>
                     <li className ="trello text-gray-900 dark:text-gray-400 transition ease-in duration-700">Vue<span className="percentage">95%</span></li>
                     <li className ="google text-gray-900 dark:text-gray-400 transition ease-in duration-700">Express <span className="percentage">75%</span></li>
                     <li className ="google text-gray-900 dark:text-gray-400 transition ease-in duration-700">Postgress <span className="percentage">80%</span></li>
                 </ul>     
            </div>
            
        </div>
       </div>
    </div>
  );
}

export default CssView;
