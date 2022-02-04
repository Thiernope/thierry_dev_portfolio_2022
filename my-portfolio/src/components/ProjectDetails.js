import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom"
import { projectsData } from './projectData/projectsData';
import { Link} from "react-router-dom"
import Nav from "./nav/Nav"
import Menu from './Menu';
import Footer from "./sections/Footer"
const ProjectDetails = () => {
    const { id } = useParams();
    const proj = projectsData.filter(proj => proj.id === id);
    const [project ] = useState(proj)
    const otherProj = projectsData.filter(proj => proj.id !== id);
    const [otherProjects ] = useState(otherProj)

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="">
    <Nav/>
    <div className="container w-full md:flex justify-between items-start">
     <div className="w-full h-full">
     {project.map(proj => (
      <div className="mt-6">
     <div key={proj.id} className="px-3 md:p-8 lg:px-24 md:grid grid-cols-2 gap-4 sm:gap-6 lg:gap-16">
     <div className="">
     <img src={proj.image} alt="nice" className="rounded-lg h-full w-full object-cover"/>
     </div>
       <div className="space-y-6">
       <h1 className="gr mt-10 sm:mt-0 font-semibold text-2xl lg:text-3xl">{proj.title}</h1>
       <p className="text-left max-w-xs lg:max-w-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
         {proj.description}
         </p>
         <h1 className="gr font-semibold text-xl lg:text-2xl">Stacks used in the this project</h1>
         <div className="flex flex-wrap">
        {proj.skillsCovered.map((skill) => (
           <a href={skill.link} rel="noreferrer"  target="_blank">
           <p style={{backgroundColor: `${skill.bgColor}`, color: `${skill.textColor}`}}className="mt-1 cursor-pointer text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{skill.name}</p>
           </a>
        ))}
        </div>
       

       <div className="">
       <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Github</button>
       <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Live site</button>
       </div>
       </div>
   </div>

   <div className=" mt-6 px-3 md:p-8 lg:px-24 space-y-6">
     <h1 className="gr max-w-xs font-semibold text-xl lg:text-2xl">Purpose for the project</h1>
     <p className="text-left max-w-xs lg:max-w-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
         {proj.description}
         </p>

      <h1 className="gr max-w-xs font-semibold text-xl lg:text-2xl">Problem solved</h1>
     <p className="text-left max-w-xs lg:max-w-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
         {proj.description}
         </p>

         <h1 className="gr max-w-xs font-semibold text-xl lg:text-2xl">What was the most challenging part in this project?</h1>
     <p className="text-left max-w-xs lg:max-w-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
         {proj.description}
         </p>
       </div>
   </div>
    ))}
     <div className="mt-20">
      <div className="lg:flex flex-col justify-center items-center">
      <h1 className="gr px-3 md:p-8 lg:px-24 mt-6 mb-6 font-semibold text-xl lg:text-3xl">You may also like check</h1>
      <div className="px-3 md:p-8 lg:px-24 grid grid-cols-2 sm:grid sm:grid-cols-3 gap-6 sm:gap-10 md:gap-16">
      {otherProjects.map(proj=> (
        <div key={proj.id} onClick={() => window.location.reload()}>
          <Link to ={`/project-details/${proj.id}`}>
          <h1 className="mb-4 text-indigo-600 font-semibold text-sm text-xl">{proj.title}</h1>
          <div>
          <img src={proj.image} alt={"hiii"} className="rounded-lg h-32 object-cover"/>
          </div>
          </Link>
        </div>

      ))}
      </div>
       </div>
       </div>
    <Footer/>
     </div>
     <div className="hidden lg:block sticky top-20">
     <Menu/>
     </div>
    </div>
    </div>

  )
}

export default ProjectDetails