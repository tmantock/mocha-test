import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ comment: '' });
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea rows="3" value={this.state.comment} onChange={this.handleChange.bind(this)} />
        <button action="submit">Submit</button>
      </form>
    );
  }
}

export default CommentBox;
