import React from "react";

const DogCard = (props) => {
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
            <button className="dogs-btn">ADD TO CART</button>
        </div>
    )
}

export default DogCard;