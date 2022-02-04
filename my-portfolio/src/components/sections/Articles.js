import React from 'react';
import { Link } from "react-router-dom"
import Typical from "react-typical"
const Articles = () => {
  return (
    <div className="">
        <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["My Articles", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>
    <div className="mt-10 md:mt-0 justify-items-center grid sm:grid-cols-2 gap-6 sm:gap-10 md:gap-16">
   <Link to="" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CDN</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">CDN refers to Content Delivery Network or Content Distribution Network. It is a geographically distributed network of proxy servers and their data centers. It has the main goal of providing high avialablity and performane by distributin the services spatially relative to end users.<span className="text-green-500">read more</span></p>
   </Link>

   <Link to="" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next JS</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Next.js is an open-source web development framework built on top of Node.js to enable React based web applications to have functionalities such as server-side rendering and generating static websites.<span className="text-green-500">read more</span></p>
   </Link>

   <Link to="" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CI/CD - Netlify</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Have you wondered how you can deploy your react app on netlify as quickly as possible? Github Actions makes it easy and facilitates quick deployments using github workflow. In this post, I am going to show you how to trigger automatic deployments to netlify using github workflow.<span className="text-green-500">read more</span></p>
   </Link>

   <Link to="" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hoisting in Javascript</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">JavaScript Hoisting refers to the process whereby declaration of functions, variables or classes are moved to the top of their scope, prior to execution of the code.<span className="text-green-500">read more</span></p>
   </Link>

   <Link to="" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PWA</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">A progressive web application, commonly known as a progressive web app, is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly.<span className="text-green-500">read more</span></p>
   </Link>
    </div>
    </div>
  );
}

export default Articles;
