import React, { PropTypes } from 'react'
import Restaurant from './Restaurant';

const RestaurantList = (props) => {
  return (
    <div>
      <Restaurant restaurants={props.restaurants}/>
    </div>
  )
}

export default RestaurantList;
