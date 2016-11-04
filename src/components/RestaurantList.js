import React from 'react'
import Restaurant from './Restaurant';

const RestaurantList = (props) => {
  return (
    <div className="col-xs-6">
      <Restaurant setSelectedRestaurant={props.setSelectedRestaurant} restaurants={props.restaurants}/>
    </div>
  )
}

export default RestaurantList;
