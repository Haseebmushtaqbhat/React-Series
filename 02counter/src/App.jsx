import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,haseebCounter]=useState(2)
  // let counter=15
  const addValue=()=>{
    console.log("clicked",counter)
    // counter=counter+1;
   haseebCounter(counter+1);
  }
  const removeValue=()=>{
    console.log("clicked",counter)
    // counter=counter+1;
   haseebCounter(counter-1);
  }
  return (
    <>
      
   <h1> chai aur react</h1>
   <h2>counter value:{counter}</h2>
   <button
   onClick={addValue} >Add value {counter}</button>
   <br />
   <button
   onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
