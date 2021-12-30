import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {myCart, total, setCart, setTotal} = useContext(CartContext);
    const handleDone = () => {
        
            <div>
                setCart([{}]);
                setTotal(0);
            </div>
    }
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
                <div className="cart-total">Total: {total}$</div>
                </div>
                <div className="btn">
                    <button className="cart-btn" onClick={handleDone}> Done</button>

                </div>
            </div>


    )
}

export default Cart;