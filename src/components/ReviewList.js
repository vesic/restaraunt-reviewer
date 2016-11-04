import React from 'react'
import Review from './Review';
import Modal from './Modal';

const ReviewList = (props) => {
  console.log('from reviewlist ', props)
  return (
    <div className="col-xs-10 col-xs-offset-1">
      <div className="page-header">
        <div className="row">
          <div className="col-xs-6">
            <h3>Reviews</h3>
          </div>
          <div className="col-xs-6">
            <Modal />
          </div>
        </div>
      </div>
      { props.reviews.map(r => <Review deleteReview={props.deleteReview} review={r}/>) }
    </div>
  )
}

export default ReviewList;
