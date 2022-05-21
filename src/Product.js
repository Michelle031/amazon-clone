import React from 'react';
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Product({id, title, price, image, rating}) {

  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const addToBasket = () => {
      if (user) {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, price, image, rating,
            }
        })
      } else {
         navigate("/login");
      }
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((star) => (
                <p>&#11088;</p>
                ))}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product