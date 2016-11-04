import React from 'react'

const SelectedRestaurant = ({restaurant}) => {
  return (
    <div className="col-xs-6">
      <div className="well">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </div>
  )
}

export default SelectedRestaurant;
