import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  onSubmitClick(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  render(){
    return (
      <div className="comment-box">
        <textarea rows="3" value={this.state.comment} onChange={this.handleChange.bind(this)} />
        <button onClick={this.onSubmitClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default CommentBox;
