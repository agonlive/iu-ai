import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <div>
        <input type="text" />
        <button> Send </button>
      </div>
      <div>
        <h2> คำตอบ </h2>
        <div> ... </div>
      </div>
    </>
  )
}

export default App

