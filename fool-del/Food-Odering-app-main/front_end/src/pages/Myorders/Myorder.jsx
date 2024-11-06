import React, { useEffect, useState, useContext } from 'react';
import "./Myorder.css";
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Myorder = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrder = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrder();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item,index)=>{
                                if (index === order.items.length-1) {
                                    return item.name+" x "+item.quantity
                                }
                                else{
                                    return item.name+" x "+item.quantity+", "
                                }
                            })}</p>
                            <p>{order.amount} &#8377;</p>
                            <p>Items : {order.items.length}</p>
                            <p id='proccessing'><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrder}>Track order</button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Myorder;
