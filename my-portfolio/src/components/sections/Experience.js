import React, {useState} from 'react';
import Typical from "react-typical"
import JsPDf from "jspdf";
import html2canvas from "html2canvas";

const Experience = () => {
  const [showOnPrinting, setShowOnPrinting] = useState(true);
  const [ showModal, setShowModal ] = useState(false);
  const [printingPopup, setPrintingPopup ] = useState(false);
  const generateInvoicePDF = () => {
    setShowOnPrinting(false);
    setPrintingPopup(true);
    setTimeout(() => {
      const elm = document.getElementById("myCv");
      html2canvas(elm, {
        logging: true,
        letterRendering: 1,
        useCORS: true,
      }).then((canvas) => {
        const imageWidth = 150;
        const imageHeight = (canvas.height * imageWidth) / canvas.width;
        const imageData = canvas.toDataURL("invoice/png");
        const pdf = new JsPDf("p", "mm", "a4");
        pdf.addImage(imageData, "PNG", 30, 10, imageWidth, imageHeight);
        pdf.save("invoice.pdf");
        setShowOnPrinting(true);
        setPrintingPopup(false);
      });
    }, 1000);
  };
  
  
  return (
    <div>
      <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["My Experience", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>
    <div className="mt-10 md:mt-0 p-3 w-full rounded-md sm:border sm:border-gray-500 sm:border sm:hover:border-dotted  sm:flex justify-around items-center sm:pt-20 sm:pb-20">
        <div className="sm:flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">3 years</h1>
          <h1 className="font-bold text-2xl lg:text-2xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">of</h1>
          <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 dark:text-gray-400 transition ease-in duration-700 sm:mt-3">Experience</h1>
        </div>

    <div className="mt-6 sm:mt-0 sm:flex flex-col justify-around items-center ">
      <h1 className="font-semibold text-2xl lg:text-2xl mb-3 text-gray-900 dark:text-gray-400 transition ease-in duration-700">Download my CV</h1>
      <div className="hidden lg:block">
      <svg onClick={() => setShowModal(true)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-14 h-14 border border-gray-400 hover:border-dotted rounded-md md:mt-10 md:h-28 md:w-28 text-gray-900 dark:text-gray-400 transition ease-in duration-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
        </svg>
      </div>

      <a className="lg:hidden" href="https://docs.google.com/document/d/1L97We1cr0JVg9RnHTt_zd79OKJimGHWj/edit?usp=sharing&ouid=109790742850347133407&rtpof=true&sd=true" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-14 h-14 border border-gray-400 hover:border-dotted rounded-md md:mt-10 md:h-28 md:w-28 text-gray-900 dark:text-gray-400 transition ease-in duration-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
    </div>


{/* <!-- Main modal --> */}

{ showModal &&
<div className="fixed top-0 left-0 right-0 z-50 bg-black w-full p-4 dark:bg-white overflow-y-auto md:inset-0 h-modal md:h-full">

  {/* downloading spiner */}

  {printingPopup && 
  <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    
<div role="status">
    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>

    <div className="ml-3 text-sm font-normal">Downloading...</div>
</div>

  }

  
    <div id='myCv' className="relative w-full h-full max-w-2xl md:h-auto m-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            {showOnPrinting && 
             <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 onClick={generateInvoicePDF} className="underline text-xl font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline hover:text-blue-400">
                   Download
                </h3>
                <button onClick={() => setShowModal(false)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            }
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div>
                <div className="flex justify-center items-center">
                <p className="m-auto dark:text-white">Thierry Ntirandekura</p>
                </div>
               <div className="flex justify-between atems-center">
                <p className="dark:text-white">KG11 Av 183, Kigali |</p>
                <p className="dark:text-white">+250 787295921</p>
                <p className="dark:text-white">| ntirandth@gmail.com</p>
               </div>
              </div>
              <div>
              <div className="border-b-2 pb-2 border-black dark:border-gray-400">
                <p className="dark:text-white">Profile</p>
              </div>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                   Aspiring Software Engineer with extensive knowledge in building APIs with NodeJS with Express or Nest Framework( REST or GRAPHQL). UX designer with JavaScript and ReactJs for Front End. Exceptional leadership, organisational, interpersonal, analytical, and problem resolution skills. Ability to thrive in both independent and collaborative work environments.
                </p>
              </div>

              <div>
              <div className="border-b-2 pb-2 border-black dark:border-gray-400">
                <p className="dark:text-white">Work Experience</p>
              </div>
              <div>
             <p className="mt-2 dark:text-white">Ironji trade ltd, August 6 - present, Software Engineer (FrontEnd)</p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        # Implement dashboard feature with Next js
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        # Integrate the frontend UI with the backend APIs (built in GraphQL)  using react-query and apollo-client. 
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      # Test all the features using end-to-end testing with cypress
                    </p>
              </div>

                <div>
          <p className="mt-2 dark:text-white">RIED Berlin, March 01 - August 15, Software Engineer (React as fronted and Shopify As Backend)</p>
               
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        # Built regularly online stores with shopify and make sure that the details information for each item is set correctly
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                 # Configured shopify-storefront API to facilitate the integration with any frontend UI built in React, Angular, Webflow or Wordpress.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                   # Built frontend UI using react and integrated it with the shopify store using Shopify Javascript Buy SDK 
                    </p>
      
              </div>


                <div>
          <p className="mt-2 dark:text-white">March 3, 2021 – April 1, 2022  Octan Group – React  developer</p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        # Designed UI mockups for every feature using figma design tool
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        # Implemented weekly features on frontend using ReactJs with TailwindCSS and HTML
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      # Reviewed team members Pull requests and gave several feedbacks on repositories
                    </p>
              </div>

                     <div>
          <p className="mt-2 dark:text-white">September 7, 2020 - March 3,2021, Andela-kigali  (ATLP) - React & Node js Developer Trainee</p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                       # Worked backend APIs using NodeJs with Express framework 
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      # Used Database servers like PostgreSQL, MongoDB, Firebase and firestore
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      # Implemented weekly features on frontend using ReactJs with CSS and HTML
                    </p>
              </div>

              </div>

              <div>
              <div className="border-b-2 pb-2 border-black dark:border-gray-400">
                <p className="dark:text-white">Education</p>
              </div>
              <p className="dark:text-white">Andela Trainee in Technical Leadership Program, 2020</p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Certification of bootcamp completion as Javascript full-stack web developer. (9 months).
                    </p>
                     <p className="dark:text-white">Southern New Hampshire University, Kepler Program, 2018</p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Bachelor Degree
                    </p>
              </div>

              <div>
              <div className="border-b-2 pb-2 border-black dark:border-gray-400">
                <p className="dark:text-white">Skills</p>
              </div>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    # Java, JavaScript, NodeJs, Express/Nest, Reactjs/NextJs, Git, Redux, React Query, TailwindCss
                    </p>
              </div>
               <p className="dark:text-white"> Portfolio website: https://www.thierrysite.com/ </p>
 
            </div>
        </div>
    </div>
</div>

}

    </div>
  );
}

export default Experience;
