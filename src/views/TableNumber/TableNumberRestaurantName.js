import React from 'react';
import image1 from './images/decklogo.jpg';
import mystyles from './RestaurantName.css';

function TableNumberRestaurantName(props) {
    return (
        <div className = "restaurant">
            <h1 className="name"> THE DECK RESTAURANT</h1>
            <img src={image1} alt="" 
            class="center"
            height = {150}
            width = {300} />
        </div>
    );
}

export default TableNumberRestaurantName;