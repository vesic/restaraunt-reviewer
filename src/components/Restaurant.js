import React, { PropTypes } from 'react';
import AverageRating from './AverageRating';

const Restaurant = (props) => {
  let restaurants = props.restaurants;
  return (
    <div className="list-group">
    {
      restaurants.map(restaurant => {
        return (
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
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
