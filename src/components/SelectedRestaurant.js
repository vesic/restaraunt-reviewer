import React from 'react'
import RestaurantMap from './RestaurantMap';

const SelectedRestaurant = ({restaurant}) => {
  console.log('restaurant', restaurant)
  return (
    <div className="col-xs-6">
      <div className="well">
        <h2>{restaurant.name}</h2>
        <hr />
        <p>{restaurant.description}</p>
        <hr />
        <RestaurantMap coords={restaurant.coords}/>
      </div>
    </div>
  )
}

export default SelectedRestaurant;
