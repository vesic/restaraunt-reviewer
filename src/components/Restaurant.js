import React, { PropTypes } from 'react'

const Restaurant = (props) => {
  let restaurants = props.restaurants;

  return (
    <ul>
      { restaurants.map(r => <li>{r.name}</li>) }
    </ul>
  )
}

export default Restaurant
