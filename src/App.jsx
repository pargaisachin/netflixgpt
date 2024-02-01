import { useState } from 'react'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-900 h-full w-full overflow-x-hidden relative'> 
  
      <Body/>
    </div>
  )
}

export default App
