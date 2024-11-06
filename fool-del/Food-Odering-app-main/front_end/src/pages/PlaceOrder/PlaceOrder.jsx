import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firtname: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeorder = async (event) => {
    event.preventDefault();
    let orderitems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let iteminfo = item;
        iteminfo["quantity"] = cartItems[item._id];
        orderitems.push(iteminfo);
      }
    })
    let orderData = {
      address: data,
      items: orderitems,
      amount: getTotalCartAmount() + 15,
    }
    let responese = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (responese.data.success) {
      const { session_url } = responese.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error")
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])

  return (
    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firtname' onChange={onChangehandler} value={data.firtname} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangehandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Enter Your Email' />
        <input required name='street' onChange={onChangehandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangehandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangehandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangehandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangehandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangehandler} value={data.phone} type="text" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
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
          <button type='submit' >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
