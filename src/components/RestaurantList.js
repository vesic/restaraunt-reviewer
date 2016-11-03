import React, { PropTypes } from 'react'
import Restaurant from './Restaurant';

const RestaurantList = (props) => {
  return (
    <div className="col-xs-6">
      <Restaurant restaurants={props.restaurants}/>
    </div>
  )
}

export default RestaurantList;
