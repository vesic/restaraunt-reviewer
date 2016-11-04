import React from 'react'
import moment from 'moment';

const Review = (props) => {
  // console.log('from review', props);
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{moment(props.review.date, "YYYYMMDD").fromNow()}</h3>
      </div>
      <div className="panel-body">
        {props.review.text}
      </div>
    </div>
  )
}

export default Review;
