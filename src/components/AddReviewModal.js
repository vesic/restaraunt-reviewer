import React, { Component } from 'react';

class AddReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {reviewText: '', errorMessage: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
    if (this.state.reviewText === '') {
      e.preventDefault();
      this.setState({errorMessage: 'Content must not be empty!'});
      return;
    }
    
    this.props.addReview(this.state.reviewText);
  }
  
  handleTextChange(event) {
    this.setState({reviewText: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-plus"></span> Review {this.props.restaurant.name}</button>
          <div className="modal fade" id="myModal" role="dialog">
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

