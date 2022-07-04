import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> count is: {count}</h1>
      <button type="button" onClick={() => setCount(count => count + 1)}>
        Incrementar +1
      </button>
    </div>
  )
}

export default App
