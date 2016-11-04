import React from 'react'
import Review from './Review';

const ReviewList = (props) => {
  console.log('from reviewlist ', props)
  return (
    <div className="col-xs-10 col-xs-offset-1">
      <div className="page-header">
        <h3>Reviews</h3>
      </div>
      { props.reviews.map(r => <Review review={r}/>) }
    </div>
  )
}

export default ReviewList;
