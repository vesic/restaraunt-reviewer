import React, { Component } from 'react';
import ReviewActionModal from './ReviewActionModal';
import moment from 'moment';
import _ from 'lodash';

class Review extends Component {
  constructor(props) { 
    super(props);
    
    this.state = {
      user: _.find(this.props.users, user => user._id === this.props.review.user)
    };
    
    
  }
  
  controls() {
    let isUserLoggedIn = this.state.user._id === this.props.loggedOnUser._id;
    return (
      <div className="row">
        <div className="col-xs-6">
          <button onClick={() => this.props.deleteReview(this.props.review)} className="btn btn-danger" disabled={!isUserLoggedIn} >Delete</button>
        </div>
        <div className="col-xs-6">
          <ReviewActionModal review={this.props.review} isUserLoggedIn={isUserLoggedIn} editReview={this.props.editReview} />
        </div>
      </div>  
    );
  }
  
  render() {
    let ratings = [];
    for (let i = 0; i < this.props.review.stars; i++) {
      ratings.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>{this.state.user.name} </strong>posted {moment(this.props.review.date, "YYYYMMDD").fromNow()}</h3>
        </div>
        <div className="panel-body">
          {this.props.review.text}
          <div>
            <h3>{ratings}</h3>
          </div>
        </div>
        <div className="panel-footer">
          {this.controls()}
        </div>
      </div>
    );
  }
}

export default Review;