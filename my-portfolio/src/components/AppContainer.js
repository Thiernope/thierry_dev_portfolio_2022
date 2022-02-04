import React from 'react';
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Skills from "./sections/SkillSteps/Skills"
import Articles from "./sections/Articles"
import Nav from  "./nav/Nav"
import Bio from "./sections/Bio"
import "./AppContainer.css"
import Menu from './Menu';
import Experience from './sections/Experience';
import Footer from "./sections/Footer"
const AppContainer = () => {

  return (
    <div>
      <Nav/>
    <div className="container w-full md:flex justify-between items-start">
    <div className="w-full">
      <div id= "about" className="px-3 md:p-8 lg:px-24 h-full">
        <Bio/>
      </div>

      <div id="skills" className="px-3 md:p-8 lg:p-24 h-full">
       <Skills/>
       </div>

       <div id="projects"className="p-3 md:p-8 lg:p-24 h-full">
       <Projects/>
       </div>

       <div id="experience" className="px-3 md:p-8 lg:p-24 h-full lg:h-screen xl:h-full">
       <Experience/>
       </div>

       <div id="articles" className="px-3 md:p-8 lg:p-24 h-full">
       <Articles/>
       </div>
    
       <div id="contact"className="px-3 md:p-8 lg:p-24 h-full lg:h-screen xl:h-full">
        <Contact/>
       </div>
       <div className="px-3 md:p-8 lg:p-24">
        <Footer/>
       </div>
    </div>
    <div className="hidden lg:block sticky top-20">
    <Menu/>
    </div>
    </div>
    </div>
  );
}

export default AppContainer;
