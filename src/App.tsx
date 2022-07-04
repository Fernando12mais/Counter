import { useState } from 'react'
import logo from './logo.svg'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>count is: {count}</h1>
      <button
        data-testId="increment-button"
        type="button"
        onClick={() => setCount(count => count + 1)}
      >
        Incrementar +1
      </button>
      <button
        data-testId="decrement-button"
        type="button"
        onClick={() => setCount(count => count - 1)}
      >
        Decrementar -1
      </button>
    </div>
  )
}
