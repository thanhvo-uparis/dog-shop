import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {myCart} = useContext(CartContext);
    return(
        <div className="cart-container">
            <div className="cart-header">Checkout:</div>
            <div className="cart-items">

                {myCart.slice(1).map((item) => {
                    return(
                    <div className="item-container">
                        <img src={item.imgDog} alt="" className="cart-img" />
                        <p>{item.name} : {item.price}$</p> 
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;