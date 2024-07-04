import { createContext, useState } from "react";
import run from "../config/Gemini";    

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [promptArray, setPromptArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const streamData = (index, nextWord) => {
      setTimeout(function () {
        setResult((prev) => prev + nextWord)
      }, 75 * index)
  }

  const onSent = async () => {

    setInput("");
    setResult("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPromptArray((prev) => [...prev, input])
    const response = await run(input);
    let responseArray = response.split("**");
    let unfilteredResponse;
    
    for(let i=0; i<responseArray.length; i++) {
      if (i === 0 || i%2 === 0) {
        unfilteredResponse += responseArray[i];
      } else {
        unfilteredResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let unstreamableResponse = unfilteredResponse.split("*").join("</br>")
    let streamableResponseArray = unstreamableResponse.split(" ");

    for(let i=0; i<streamableResponseArray.length; i++) {
        streamData(i, streamableResponseArray[i] + " ") 
    }

    setLoading(false);
    console.log(showResult);
  };

  const contextValue = {
    promptArray, setPromptArray, onSent, setRecentPrompt, recentPrompt,
    loading, showResult, result, input, setInput
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
