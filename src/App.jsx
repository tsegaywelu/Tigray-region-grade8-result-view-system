import React, { useState } from 'react'
import Navbar from './componenets/Navbar'

const App = () => {
  let [y,sety]=useState();
  let data="girl";
  function yescliking(){
    sety=0;
    console.log("you are cliking me ")
    console.log(y++)
  
  }
  return (
    <div>
      {y}
      {data==="boy"?<h2>boy</h2>:<h1>girl</h1>}
     
      <button onClick={yescliking}>click me</button>

     <Navbar></Navbar>
     
    </div>
  )
}

export default App