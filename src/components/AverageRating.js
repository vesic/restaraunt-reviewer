import React from 'react'

const AverageRating = (props) => {
  let count = props.stars;
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>)
  }
  return (stars.length > 0) ? (
    <div className=''>
      {stars}
    </div>
  ) : (
    <div className=''>
      <span className="glyphicon glyphicon-ban-circle"></span>
    </div>
  )
}

export default AverageRating
