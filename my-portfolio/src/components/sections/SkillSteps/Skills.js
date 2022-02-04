import React, {useState} from 'react';
import LineView from "./LineView"
import CssView from "./CssView"
import PolarAreaChart from "./PolarAreaView"
import  BarView from "./BarView"
import "./Skills.css"
import Chart from 'chart.js/auto'
Chart.register();
const Skills = () => {
const [activeStep, setActiveStep] = useState(0)

const showPolarAreaChart = () => {
  setActiveStep(0)
}

const showLineChart = () => {
  setActiveStep(1)
}

const showBarChart = () => {
  setActiveStep(2)
}
const showCssChart = () => {
  setActiveStep(3)
}
const getActiveStep = (step) => {
switch(step) {
case 0: 
return <PolarAreaChart showPolarAreaChart ={showPolarAreaChart} showLineChart ={showLineChart} showBarChart ={showBarChart} showCssChart={showCssChart}/>
case 1:
return <LineView showPolarAreaChart ={showPolarAreaChart} showLineChart ={showLineChart} showBarChart ={showBarChart} showCssChart={showCssChart}/>
case 2: 
return <BarView showPolarAreaChart ={showPolarAreaChart} showLineChart ={showLineChart} showBarChart ={showBarChart} showCssChart={showCssChart} />
case 3:
return <CssView showPolarAreaChart ={showPolarAreaChart} showLineChart ={showLineChart} showBarChart ={showBarChart} showCssChart={showCssChart}/>
default:
  return <PolarAreaChart  showPolarAreaChart={showPolarAreaChart} showLineChart ={showLineChart} showBarChart ={showBarChart} showCssChart={showCssChart}/>
}
}
  return (
    <div className="dark:bg-gray-900 transition ease-in duration-700">
      {getActiveStep(activeStep)}
    </div> 
  );
}

export default Skills;
