import React, { Component } from 'react';

class CommentInfo extends Component {
  render() {
    const { comment, id } = this.props.info;

    return <div>{comment}</div>;
  }
}

export default CommentInfo;
