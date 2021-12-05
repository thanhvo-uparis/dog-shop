import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {myCart, total} = useContext(CartContext);
    return(
        <div className="cart-container">
            <div className="cart-header">Checkout:</div>
            <div className="cart-items">

                {myCart.slice(1).map((item) => {
                    return(
                    <div className="cart-items">
                        <img src={item.imgDog} alt="" className="cart-item-img" />
                        <p>{item.name} : {item.price}$</p> 
                    </div>
                    )
                })}
            <div className="cart-total">Total: {total} </div>
            </div>
        </div>
    )
}

export default Cart;