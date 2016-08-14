import React, { Component } from 'react';

class CommentBox extends Component {
  onSubmitClick(event) {
    event.preventDefault();
  }
  render(){
    return (
      <div className="comment-box">
        <textarea rows="3" />
        <button onClick={this.onSubmitClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default CommentBox;
