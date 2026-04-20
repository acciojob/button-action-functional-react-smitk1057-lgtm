import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setClick]=useState()
   function  handleClick(){
    setClick('Hello, I ve learnt to use the full-stack evaluation tool. This makes me so happy')
   }

  return (
    <div id="main">
      
     
      <button  id ='click' onClick={handleClick}>Click</button>
       {click &&   <p id = 'para'>{click}</p>  }
      
    </div>
  );
}


export default App;
