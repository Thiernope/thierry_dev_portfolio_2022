import React, {useState} from 'react';
import { Link } from "react-router-dom"
import Typical from "react-typical"
import { projectsData } from "../projectData/projectsData"
const Projects = () => {
    const [projects] = useState(projectsData)
  return (
    <div className="">
       <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["My Work", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>

    <div className="mt-10 md:mt-0 justify-items-center grid sm:grid-cols-2 gap-6 sm:gap-10 md:gap-16">
        {projects.map(project=> (
             <div key = {project.id} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
             <Link to={`project-details/${project.id}`}>
                 <img className="rounded-t-lg h-1/2 w-full object-cover" src={project.image} alt="" />
             </Link>
             <div class="p-5">
                 <Link to={`project-details/${project.id}`}>
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                 </Link>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                 <Link to={`project-details/${project.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 </Link>
             </div>
         </div>
         
        ))}


    </div>
    </div>
  );
}

export default Projects;
