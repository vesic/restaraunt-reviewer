import React, { Component } from 'react';

class AddModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: this.props.review.text
    }
  }
  
  onSubmit(e) {
    e.preventDefault();
    alert("Edit, but not really!")
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    let i = `#${this.props.review._id}`, j = `${this.props.review._id}`;
    return (
      <div className="">
        <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target={i} ><span className="glyphicon glyphicon-edit"></span></button>
        <div className="modal fade" id={j} role="dialog">
          <div className="modal-dialog">
          
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add Review</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Email address</label>
                    <input className="form-control" id="title" placeholder="Title" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" rows="3" id="content" onChange={this.handleChange} value={this.props.review.text} ></textarea>
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

export default AddModal;

