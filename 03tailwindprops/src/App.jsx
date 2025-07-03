import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"sanika",
    age:21
  }
  let newArr=[1,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center">Tailwind test</h1>
      <Card name="chaiaurcode" someObject={newArr}/>
      <Card name="learn"/>


    
    </>
  )
}

export default App


