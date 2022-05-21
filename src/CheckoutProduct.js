import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({image, id, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" />
        <div className='checkoutProduct__info'>
            <h2>{title}</h2>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((star) => (
                <p>&#11088;</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;