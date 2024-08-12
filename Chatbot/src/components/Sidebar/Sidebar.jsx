import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'


const Sidebar = () => {
  const [extend, setExtended] = useState(false)
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>{setExtended(prev=>!prev)}} src={assets.menu_icon} className='menu' />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          {extend?<p>New Chat</p>:null}
        </div>
        {extend ? <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} />
            <p>What is React...</p>
          </div>
        </div> : null}

      </div>
      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
          {extend?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extend?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
          {extend?<p>Settings</p>:null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar