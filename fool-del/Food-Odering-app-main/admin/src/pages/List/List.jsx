import React, { useEffect, useState } from 'react';
import axios from "axios";
import './List.css';
import { toast } from "react-toastify";

const List = ({ url }) => {

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("error")
    }
  }
  useEffect(() => {
    fetchList();
  }, []);
  const countItems = () => {
    return list.length;
  }

  useEffect(() => {
    console.log("total item is:", countItems())
  })
  const removeFood = async (foodId) => {
    const remove = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (remove.data.success) {
      toast.success(remove.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  return (
    <div className='list add flex-col'>
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-formate title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-formate">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} &#8377;</p>
              <p onClick={() => removeFood(item._id)} className='button'>Remove</p>
            </div>
          )
        })}
        <div className='totalitem'>
          <p>Total Items : {countItems()}</p>
        </div>
      </div>
    </div>
  );
};

export default List;
