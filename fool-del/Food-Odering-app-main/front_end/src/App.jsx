import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LogingPopup from './components/LogingPopup/LogingPopup'
// import FoodDetails from './components/FoodDetails/FoodDetails'
import Verify from './pages/Verify/Verify'
import Myorder from './pages/Myorders/Myorder'
const App = () => {
  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
      {showLogin ? <LogingPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          {/* <Route path='/foodDetail/:id' element={<FoodDetails />} /> */}
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<Myorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
