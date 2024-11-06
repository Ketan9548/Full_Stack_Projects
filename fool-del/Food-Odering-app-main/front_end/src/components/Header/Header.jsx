import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className="header_contents">
        <h2>Your Favorite food is here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo nihil maxime voluptates tempore, dolore eaque modi, qui commodi perferendis dolorum, enim illo suscipit repudiandae iste excepturi officiis quae quia quasi. Ad, nulla delectus.</p>
        <a href="#explore-menu"><button >View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
