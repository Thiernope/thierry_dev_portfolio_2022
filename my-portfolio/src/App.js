import React from "react";
import "./App.css"
import AppContainer from "./components/AppContainer"
import ProjectDetails from "./components/ProjectDetails";
import MenuPage from "./components/sections/MenuPage"
import {Routes, Route } from "react-router-dom"
const App = () => {
 return (
 <div className="App dark:bg-gray-900 transition ease-in duration-700">
    <Routes>
       <Route path = "/*" element = {<AppContainer/>}/>
       <Route path="/menu" element={<MenuPage/>}/>
       <Route path="/project-details/:id" element = {<ProjectDetails/>}/>
    </Routes>
 </div>
 )
}

export default App;
