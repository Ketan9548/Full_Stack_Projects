import { useState } from 'react'
import Singup from './Components/Singup'
import Singin from './Components/Singin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singin' element={<Singin />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
