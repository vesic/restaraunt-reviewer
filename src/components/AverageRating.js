import React from 'react'

const AverageRating = (props) => {
  let count = props.stars;
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<span className="glyphicon glyphicon-star-empty"></span>)
  }
  return (stars.length > 0) ? (
    <div className=''>
      {stars}
    </div>
  ) : (
    <div className=''>
      <span>0</span>
    </div>
  )
}

export default AverageRating
