import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline text-cyan-700 text-center'>Configurações iniciais do React</h1>
      <div className='text-green-900 text-center'>
        <button onClick={() => setCount((count) => count + 1)}>
          Contagem: {count}
        </button>
      </div>
    </>
  )
}

export default App
