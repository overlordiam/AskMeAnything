import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt=""></img>
            <div className="new-chat">
                <img src={assets.plus_icon} alt=""></img>
                <p>New chat</p>
            </div>
            <div className="recent">
                <p className="recent-title"></p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt=""></img>
                    <p>Something......</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt=""></img>
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt=""></img>
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt=""></img>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default sidebar