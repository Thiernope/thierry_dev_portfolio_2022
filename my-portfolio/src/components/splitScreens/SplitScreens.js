import React, {useState} from "react";
import "./Split.css"
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import {Link} from "react-router-dom"
function SplitScreens() {

  const [audioPanel, setAudioPanel] = useState(false)
  const [touchPanel, setTouchPanel] = useState(false)
  const toggleAudioPanel = () => setAudioPanel(!audioPanel)
  const toggleTouchPanel = () => setTouchPanel(!touchPanel)
  
  return(
<div className="splitContainer">
  <div className={touchPanel? "touch-pannel": "active-touch-panel"}>
    <div className={touchPanel? "touch-content": "touch-content-active"}>
      <div className="expendDiv">
        {
          audioPanel?<div onClick={toggleAudioPanel}>
          <FiMinimize2 className="text-3xl"/>
          </div> : <div onClick={toggleAudioPanel}>
        <FiMaximize2  className="text-3xl"/>
        </div>
        }
        <div className="">
         <Link to="/my-bio">Voice Control Site</Link>
        </div>
      </div>
    </div>
  </div>
  <div className= {audioPanel? "audio-pannel" : "active-audio-panel"}>
  <div className={audioPanel? "voice-content": "voice-content-active"}>
  <div className="expendDiv">
        {
          touchPanel?<div onClick={toggleTouchPanel}>
          <FiMinimize2 className="text-3xl"/>
          </div> : <div onClick={toggleTouchPanel}>
        <FiMaximize2  className="text-3xl"/>
        </div>
        }
        <div className="">
         <Link to="">Touch Control Site</Link>
        </div>
      </div>
  </div>
  </div>
</div>
  )
}

export default SplitScreens;
