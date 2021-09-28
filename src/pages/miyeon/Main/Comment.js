import React, { Component } from 'react';

class CommentText extends Component {
  render() {
    const { comment } = this.props;
    return <span>{comment}</span>;
  }
}

export default CommentText;
import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { comment } = this.props.commentList;
    return (
      <span>
        {comment}
      </span>
    );
  }
}

export default Comment;