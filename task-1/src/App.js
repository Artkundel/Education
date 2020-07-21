import React, { useState } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

const App = () => {

  const [inputText, setInputText] = useState('');

  const inputChangeHandler = (event) => {
      setInputText(event.target.value);
  }

  const deleteHandler = (index) => {
    setInputText(inputText.slice(0, index) + inputText.slice(index + 1));
  }

  return (
    <div className="App">

      <p>Input field</p>
      <div className="textContainer">
        <input value={inputText} onChange={inputChangeHandler} type="text" ></input>
        <p>Length of intered box is: {inputText.length}</p>
        <ValidationComponent textLength={inputText.length} />
      </div>
      
      {inputText.split('').map((letter,index) => {
        return <CharComponent delete={() => deleteHandler(index)} key={index} >{letter}</CharComponent>
      })}
      

    </div>
  );
}

export default App;
