import React, { Component } from 'react';

class Modal extends Component {
  onSubmit(e) {
    e.preventDefault();
    alert("Submit, but not really!")
  }
  render() {
    return (
      <div className="row">
        <button type="button" className="btn btn-info btn-lg pull-right" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-plus"></span></button>
      
        <div className="modal fade" id="myModal" role="dialog">
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
                    <textarea className="form-control" rows="3" id="content"></textarea>
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

export default Modal;

