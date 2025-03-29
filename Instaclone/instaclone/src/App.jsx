import Singup from './Components/Singup'
import Singin from './Components/Singin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
function App() {

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
