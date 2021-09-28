import React, { Component } from 'react';
import CommentText from './CommentText';

class CommentList extends Component {
  render() {
    const {commentList} = this.props
    const map = commentList.map((comment) => (<CommentText comment={comment}/>)
    return (
      <div>{map}</div>
    )
  }
}

export default CommentList;
