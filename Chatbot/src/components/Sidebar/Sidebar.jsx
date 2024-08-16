import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Sidebar = () => {
  const [extend, setExtended] = useState(false)
  const {onSent,prevPromt,setRecentPromt,newChat}=useContext(Context)

  const loadPromt=async(promt)=>{
    setRecentPromt(promt)
    await onSent(promt)
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>{setExtended(prev=>!prev)}} src={assets.menu_icon} className='menu' />
        <div onClick={()=>{newChat()}} className='new-chat'>
          <img src={assets.plus_icon} alt="" />
          {extend?<p>New Chat</p>:null}
        </div>
        {extend ? <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPromt.map((item,index)=>{
              return(
                <div onClick={()=>loadPromt(item)} className="recent-entry">
            <img src={assets.message_icon} />
            <p>{item.slice(0,18)}...</p>
          </div>
              )
          })}
          
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