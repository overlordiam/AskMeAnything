import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Alfred</p>
        <img src={assets.user_icon} alt=""></img>
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Master Name!</span>
          </p>
          <p>How can I serve you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Help me incorporate more plant-based options in my diet</p>
            <img src={assets.compass_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Recommend new types of water sports, including pros & cons</p>
            <img src={assets.bulb_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Come up with a complex word riddle, including hints</p>
            <img src={assets.message_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Walk me through how to apply for a new role</p>
            <img src={assets.code_icon} alt=""></img>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter your prompt here" />
            <div className="search-box-icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Have fun!!</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
