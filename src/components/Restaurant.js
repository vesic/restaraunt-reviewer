import React from 'react';
import AverageRating from './AverageRating';

const Restaurant = ({setSelectedRestaurant, restaurants}) => {
  return (
    <div className="list-group">
    {
      restaurants.map(restaurant => {
        return (
          <a key={restaurant._id} href="#" className="list-group-item" onClick={(e) => { e.preventDefault(); setSelectedRestaurant(restaurant);}}>
            <h4 className="list-group-item-heading">{restaurant.name}</h4>
            <div className="list-group-item-text">
              <AverageRating stars={restaurant.ratings.starsCount.length}/>
            </div>
          </a>
        )
      })
    }
    </div>
  )
}

export default Restaurant
