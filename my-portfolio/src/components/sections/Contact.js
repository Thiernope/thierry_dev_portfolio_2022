import React, {useState } from 'react';
import Typical from "react-typical"
import emailjs from '@emailjs/browser'
//import ReCAPTCHA from "react-google-recaptcha";
import Success from "../toast/Success"
import Error from "../toast/Error"
import ClipLoader from "react-spinners/ClipLoader";


const Contact = () => {

  const formData = {
    name: "",
    email: "",
    message: ""
};
 
const [templateParams, setTemplateParams] = useState(formData)
const [isVerified, setIsVerified ] = useState(false)
const [notification, setNotification] = useState(null)
const [loading, setLoading] = useState(null)

const closeNotification = () => {
 setNotification(null)
}

const fetchRecaptureValue  = (value) => {
  if(value) {
    return setIsVerified(true)
  } 
  return setIsVerified(false)
}

const SERVICE_ID = process.env.REACT_APP_MAIL_JS_SERVICE_ID

const TEMPLETE = process.env.REACT_APP_MAIL_JS_TEMPLATE

const PUBLIC_KEY = process.env.REACT_APP_MAIL_JS_PUBLIC_KEY

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_SITE_KEY_RECAPTCHA


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(<ClipLoader/>)
    emailjs.send(SERVICE_ID, TEMPLETE, templateParams, PUBLIC_KEY)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setNotification(<Success close = {closeNotification}/>)
       setLoading(null)
    }, function(error) {
       console.log('FAILED...', error);
       setNotification(<Error close = {closeNotification}/>)
       setLoading(null)
    });

    setTemplateParams({
      name: "",
      email: "",
      message: ""
    })
  };


  return (
    <div className="">
 <h1 className="mt-20 md:mt-0 md:mb-20 text-xl lg:text-3xl text-gray-900 dark:text-gray-400 transition ease-in duration-700"><Typical
           steps={
             ["Contact me", 3000, "____"]
           }
           loop ={Infinity}
           wrapper = "p"
           /></h1>

       <form>
  <div className="mt-10 md:mt-0 grid xl:grid-cols-2 xl:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="user_name" 
        id="user_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value = {templateParams.name}
        onChange = {(e)=> {setTemplateParams({...templateParams, name: e.target.value})}}
        />
        <label for="user_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input 
        type="email" 
        name="user_email" 
        id="user_email" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value = {templateParams.email}
        onChange = {(e)=> {setTemplateParams({...templateParams, email: e.target.value})}}
        />
        <label for="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
  </div>
  <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
  <textarea 
  name = "message" 
  id="message" 
  rows="4" 
  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  placeholder="Your message..."
  value = {templateParams.message}
  required
  onChange = {(e)=> {setTemplateParams({...templateParams, message: e.target.value})}}
  ></textarea>

{/* <div className="max-w-xs mt-5">
<ReCAPTCHA
    sitekey={RECAPTCHA_SITE_KEY}
    onChange={fetchRecaptureValue}
  />
</div> */}
  {notification} 
  {/* {isVerified === true?  */}
  <button onClick={sendEmail} className="mt-5 flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading} Submit</button>
  {/* :
/* <button disabled className="cursor-no-drop mt-5 text-gray-800 bg-gray-300 hover:bg-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
}  */}
</form>

     
    </div>
  );
}

export default Contact;
