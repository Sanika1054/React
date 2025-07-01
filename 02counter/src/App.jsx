import {useState} from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  //let counter=15
  const addValue = () =>{
    if(counter<100){
      setCounter(counter+1)
    }
    else{
      console.log("counter can't go above 100");
    }
    //counter=counter+1
    
    //setCounter(counter+1)
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      console.log("counter can't go below 0");
    }
   
    
  }
  
  return (
    <>
      <h1>Chai aur react!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>

      
    </>
  )
}

export default App
