import React from 'react'
import NavTwo from "../secondNav/NavTwo" 
import Menu from '../Menu'
const MenuPage = () => {
  return (
    <div className="h-screen dark:bg-gray-900 transition ease-in duration-700">
     <NavTwo/>

    <div className="p-3">
        <h1 className="dark:text-white ">Menu</h1>
        <div>
       <Menu/>
        </div>
    </div>
    </div>
  )
}

export default MenuPage