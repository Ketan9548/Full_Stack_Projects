import React, { useContext } from 'react';
import './Fooditem.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        {/* <Link to={`/foodDetails/${id}`}>
          <img src={`${url}/images/${image}`} alt={name} className="food-item-image" />
        </Link> */}
          <img src={`${url}/images/${image}`} alt={name} className="food-item-image" />
        {token ? (
          !cartItems[id] ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
          ) : (
            <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to cart" />
            </div>
          )
        ) : null}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">&#8377; {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
