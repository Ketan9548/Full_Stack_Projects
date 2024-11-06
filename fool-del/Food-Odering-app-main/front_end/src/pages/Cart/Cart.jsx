import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, gettotalitem, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <br />
        {food_list.map((item, index) => {
          const quality = cartItems[item._id];
          if (quality > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title card-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} &#8377;</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} &#8377;</p>
                  <div className='cross'>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                  </div>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottem">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtoals</p>
              <p>{getTotalCartAmount()} &#8377;</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{15} &#8377;</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15} &#8377;</b>
            </div>
          </div>
          <button onClick={() => navigate('/placeorder')}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
