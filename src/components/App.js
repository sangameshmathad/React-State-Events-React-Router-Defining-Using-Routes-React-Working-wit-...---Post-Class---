import React, { useState } from "react";
import "../styles/App.css";

let arr = ["Marco", "Polo"];

const App = () => {
  const [input, setInput] = useState(arr[0]);
  const [inputButton, setInputBUtton] = useState(arr[1]);
  const changethis = () => {
    // console.log("Clicked");
    // console.log(arr);
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    console.log(arr);
    setInput(arr[0]);
    setInputBUtton(arr[1]);
  };

  return (
    <div id="main">
      <h1 id="marco-polo">{input}</h1>
      <button id="marco-polo-toggler" onClick={changethis}>
        {inputButton}
      </button>
    </div>
  );
};

export default App;
