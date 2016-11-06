import React from 'react'
import RestaurantMap from './RestaurantMap';
import AddReviewModal from './AddReviewModal';

const SelectedRestaurant = (props) => {
  return (
    <div className="col-xs-6">
      <div className="well">
        <h1>{props.restaurant.name}</h1>
        <h3>Food: {props.restaurant.cuisine}</h3>
        <p>{props.restaurant.description}</p>
        <h3>Address: {props.restaurant.address}</h3>
        <hr />
        <RestaurantMap coords={props.restaurant.coords}/>
        <hr />
        <AddReviewModal addReview={props.addReview} restaurant={props.restaurant} loggedOnUser={props.loggedOnUser}/>
      </div>
    </div>
  )
}

export default SelectedRestaurant;
