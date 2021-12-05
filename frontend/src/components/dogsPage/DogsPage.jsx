import React from 'react';
import DogCard from './DogCard';

const DogsPage = (props) => {
    return(
        <div className="dogs-container">
            {props.allDogs.map((dog) => {
                return (
                    <div key={dog.id}>
                        <DogCard name={dog.name} breed={dog.breed} description={dog.description} price={dog.price} imgDog={dog.imageUrl}  />
                    </div>
                )
            }
            )}

        </div>
    )
}

export default DogsPage;