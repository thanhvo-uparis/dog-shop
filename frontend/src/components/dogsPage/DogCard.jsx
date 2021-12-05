import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import './dogs.css';

const DogCard = (props) => {
    const {name, price, imgDog} = props;
    const [isAdded, setAdded] = useState(false);
    const {setCart} = useContext(CartContext);

    const called = () => {
        
            setAdded(true);
            const newItems = {
                name: name,
                price: price,
                imgDog: imgDog,
            };
            setCart((item) => [...item, newItems]);
        }
        
    return (
        <div className="dogs">
            <div className="dogs-info">
                <p>{props.name}</p> 
                <p>{props.breed}</p> 
            </div>
            <div className="dogs-img-container">
                <img className="dog-img" src={props.imgDog} alt="picture of dog" />
            </div>
            <div className="dog-desc">
                <p>{props.description}</p>
            </div>
            <div className="dog-price">
                <p>{props.price}$</p>
            </div>
            {isAdded ? (
                <button className="dogs-btn-disabled">ADDED</button>
            ) : (
                <button className="dogs-btn" onClick={called}>ADD TO CART</button>
            )}
        </div>
    )
}

export default DogCard;