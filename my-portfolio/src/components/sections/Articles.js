import React from 'react';
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
   <a href="https://dev.to/thiernope/trigger-netlify-deploys-using-github-workflow-cicd-lcm" target="_blank" rel="noreferrer" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trigger Netlify Deployments Using Github Workflow (CI/CD)</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">CDN refers to Content Delivery Network...<span className="text-green-500">read more</span></p>
   </a>

   <a href="https://discovered-heat-57c.notion.site/Deploying-React-application-using-Node-js-and-nginx-on-an-Ubuntu-server-from-DigitalOcean-37e6404bd8ff400681dbe6768cd749f7" target="_blank" rel="noreferrer" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Deploying React application using Node.js and nginx on an Ubuntu server from DigitalOcean.</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">DititalOcean is one of the best cloude service...<span className="text-green-500">read more</span></p>
   </a>

   <a href="https://discovered-heat-57c.notion.site/Understanding-universal-applications-c5c70d9dfa85474a98652c7470a39811" target="_blank" rel="noreferrer" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Understanding universal applications</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">A universal application is the application that run...<span className="text-green-500">read more</span></p>
   </a>

   <a href="https://discovered-heat-57c.notion.site/Improving-the-Performance-of-Your-Applications-00c69483efdb4884b204c7cd983ea509" target="_blank" rel="noreferrer" class="block p-6 max-w-sm lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Improving the Performance of a React Applications</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">When it comes to performance optimization, react...<span className="text-green-500">read more</span></p>
   </a>
    </div>
    </div>
  );
}

export default Articles;
