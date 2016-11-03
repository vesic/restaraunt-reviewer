import React, { PropTypes } from 'react'

const AverageRating = (props) => {
  let stars = props.stars;
  return (
    <div>
      <h1>{stars}</h1>
      <span className="glyphicon glyphicon-star-empty"></span>
      <span className="glyphicon glyphicon-star-empty"></span>
      <span className="glyphicon glyphicon-star-empty"></span>
      <span className="glyphicon glyphicon-star-empty"></span>
      <span className="glyphicon glyphicon-star-empty"></span>
    </div>
  )
}

export default AverageRating
