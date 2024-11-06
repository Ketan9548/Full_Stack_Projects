import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './FoodDetails.css';
import axios from 'axios';

const FoodDetails = () => {
  const { id } = useParams();
  const { url } = useContext(StoreContext);
  const [foodDetail, setFoodDetail] = useState(null);

  const fetchDetail = async () => {
    try {
      const response = await axios.get(`${url}/api/food/${id}`);
      setFoodDetail(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (!foodDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-details">
      <div className="fooditem">
        <img src={`${url}/images/${foodDetail.image}`} alt={foodDetail.name} />
        <p>{foodDetail.name}</p>
        <p>{foodDetail.price}</p>
        <p>{foodDetail._id}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
