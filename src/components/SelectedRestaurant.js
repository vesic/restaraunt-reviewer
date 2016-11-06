import React from 'react'
import RestaurantMap from './RestaurantMap';
import AddReviewModal from './AddReviewModal';

const SelectedRestaurant = (props) => {
  return (
    <div className="col-xs-6">
      <div className="well">
        <h2>{props.restaurant.name}</h2>
        <hr />
        <p>{props.restaurant.description}</p>
        <hr />
        <RestaurantMap coords={props.restaurant.coords}/>
        <hr />
        <AddReviewModal  addReview={props.addReview} restaurant={props.restaurant} loggedOnUser={props.loggedOnUser}/>
      </div>
    </div>
  )
}

export default SelectedRestaurant;
