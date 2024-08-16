import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const {input,setInput,recentPromt,ShowResult,loading,resultData,onSent}=useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">

            {!ShowResult
            ?<>
             <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see in an upcoming road trip</p>
                    <img src={assets.compass_icon}></img>
                </div>
                <div className="card">
                    <p>Briefly summarise this concept</p>
                    <img src={assets.bulb_icon}></img>
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon}></img>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon}></img>
                </div>
            </div>               
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon}></img>
                    <p>{recentPromt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}></img>
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>}
            
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter from here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Main

