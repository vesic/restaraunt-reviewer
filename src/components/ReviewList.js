import React from 'react'
import Review from './Review';
import Modal from './Modal';

const ReviewList = (props) => {
  // console.log(props.users, 'User');
  // console.log(props.reviews, 'Review');
  return (
    <div className="col-xs-10 col-xs-offset-1">
      <div className="page-header">
        <div className="row">
          <div className="col-xs-6">
            <h2>Reviews</h2>
          </div>
          <div className="col-xs-6">
            <Modal />
          </div>
        </div>
      </div>
      { props.reviews.map(r => <Review key={r._id} users={props.users} deleteReview={props.deleteReview} review={r}/>) }
    </div>
  )
}

export default ReviewList;
