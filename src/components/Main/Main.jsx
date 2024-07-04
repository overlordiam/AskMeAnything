import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {

  const {input, onSent, recentPrompt, showResult, loading, 
  result, setInput} = useContext(Context);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Input value:', input);
      onSent();
      // You can also perform other actions here
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Alfred</p>
        <img src={assets.user_icon} alt=""></img>
      </div>
      <div className="main-container">
      {
        !showResult 
        ? 
        <>
        <div className="greet">
          <p>
            <span>Welcome, Master.</span>
          </p>
          <p>How can I serve you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>What is the best coding language out there?</p>
            <img src={assets.compass_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Give me some good anime recommendations</p>
            <img src={assets.bulb_icon} alt=""></img>
          </div>
          <div className="card">
            <p>What are the most populous countries around the world?</p>
            <img src={assets.message_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Give me a recipe to make tonkotsu ramen</p>
            <img src={assets.code_icon} alt=""></img>
          </div>
        </div></> 
        :
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt=""></img>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-response">
            <img src={assets.gemini_icon} alt=""></img>
            {loading 
            ?
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{__html: result}}></p>
            }
          </div>
        </div>
      }

        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder="Enter your prompt here" />
            <div className="search-box-icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {
                input
                ?
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                :
                null
              }
              
            </div>
          </div>
          <p className="bottom-info">Have fun!!</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
