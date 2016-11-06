import React from 'react'
import Restaurant from './Restaurant';

const RestaurantList = ({setSelectedRestaurant, restaurants}) => {
  return (
    <div className="col-xs-6">
      <Restaurant setSelectedRestaurant={setSelectedRestaurant} restaurants={restaurants}/>
    </div>
  )
}

export default RestaurantList;
