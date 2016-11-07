import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';

class AddReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {reviewText: '', errorMessage: '', isHidden: true, rating: 1};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    if (this.state.reviewText === '') {
      this.setState({errorMessage: 'Content must not be empty!'});
      return;
    }
    
    this.props.addReview(this.state.reviewText, this.state.rating, this.props.restaurant._id);
    this.setState(({reviewText:'', errorMessage:''}));
    $('.close').trigger("click");
  }
  
  handleTextChange(event) {
    this.setState({reviewText: event.target.value});
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-plus"></span> Review {this.props.restaurant.name}</button>
          <div className="modal fade" id="myModal" role="dialog" ref='close'>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h2 className="modal-title">Add Review for {this.props.restaurant.name}</h2>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.onSubmit}>
                    <h3>Posting as {this.props.loggedOnUser.name}</h3>
                    <h4>{this.state.errorMessage}</h4>
                    <div className="form-group">
                      <label htmlFor="content">&nbsp;</label>
                      <textarea className="form-control" rows="3" id="content" value={this.state.reviewText} onChange={this.handleTextChange}></textarea>
                    </div>
                    <div className='form-group'>
                    <h3>Star Ratings</h3>
                    <h1>
                      <StarRatingComponent 
                          name="starCount" 
                          starCount={5}
                          value={0}
                          onStarClick={this.onStarClick}
                      />
                    </h1>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddReviewModal;

