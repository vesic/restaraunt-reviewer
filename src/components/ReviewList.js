import React from 'react'
import Review from './Review';

const ReviewList = (props) => {
  let reviewsSorted = props.reviews.sort((a, b) => new Date(b.date) - new Date(a.date))
  return (
    <div className="col-xs-10 col-xs-offset-1">
      <div className="page-header">
        <div className="row">
          <div className="col-xs-6">
            <h2>Reviews</h2>
          </div>
        </div>
      </div>
      { reviewsSorted.map(r => <Review key={r._id} loggedOnUser={props.loggedOnUser} users={props.users} deleteReview={props.deleteReview} editReview={props.editReview} review={r}/>) }
    </div>
  );
};

export default ReviewList;
