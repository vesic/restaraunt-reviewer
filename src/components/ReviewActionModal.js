import React, { Component } from 'react';
import $ from 'jquery';

class ReviewActionModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviewText: this.props.review.text
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    if (this.state.reviewText === '') {
      this.setState({errorMessage: 'Content must not be empty!'});
      return;
    }
    
    $('.close').trigger('click');
    this.props.editReview(this.props.review, this.state.reviewText);
  }
  
  handleChange(event) {
    this.setState({reviewText: event.target.value});
  }
  
  render() {
    let r = Math.random().toString().slice(2), i = `#${r}`, j = `${r}`;
    return (
      <div className="">
        <button disabled={false} type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target={i} disabled={!this.props.isUserLoggedIn} >Edit</button>
        <div className="modal fade" id={j} role="dialog">
          <div className="modal-dialog">
          
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Edit Review</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="content">&nbsp;</label>
                    <textarea className="form-control" rows="3" id="content" onChange={this.handleChange} value={this.state.reviewText} ></textarea>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default ReviewActionModal;

