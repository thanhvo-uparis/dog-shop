import React, { useState } from "react";
import './dogs.css';

const DogCard = (props) => {
    const [isAdded, setAdded] = useState(false);
    
    function called() {
        return setAdded(true);
    }

    /*
    const called = () => {
        return 
    }

    */
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