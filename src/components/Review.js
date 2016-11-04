import React from 'react'
import moment from 'moment';
import AddModal from './AddModal';

const Review = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{moment(props.review.date, "YYYYMMDD").fromNow()}</h3>
      </div>
      <div className="panel-body">
        {props.review.text}
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <button onClick={() => props.deleteReview(props.review)} className="btn btn-danger">Delete</button>
          </div>
          <div className="col-xs-6">
            <AddModal review={props.review} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;
