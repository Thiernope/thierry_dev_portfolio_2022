import React from 'react';
import { lineData, lineOptions} from "./SkillsData"
import Typical from "react-typical"
import "./Skills.css"
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
Chart.register();

const LineView = ({showPolarAreaChart, showLineChart, showBarChart, showCssChart}) => {
      
  return (
    <div>
    <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
    steps={
      ["My Skills", 3000]
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
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500">Line</p>
        </li>
        <li className="mr-2" onClick={showBarChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Bar</p>
        </li>
        <li className="mr-2" onClick={showCssChart}>
            <p className="inline-block px-1 py-4 sm:p-4 md:px-10 md:py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">CSS</p>
        </li>
    </ul>
</div>
</div>
    <div className="sm:flex justify-between  pt-8">
    <div className="flex-1">
    <h3 className="text-gray-900 dark:text-gray-400 transition ease-in duration-700">Coding skills</h3>
     <div className="relative h-80 w-full">
      <Line data={lineData} options={lineOptions}/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default LineView