import React, { Component } from 'react';

class AddComment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <ul className="main-icon-like-text-write_commentbox">
        {comment.map((el, idx) => {
          return (
            <li key={idx + 1}>
              <span className="userName">Xangcheol</span>
              <span className="main-icon-like-text-write-subtext">{el}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default AddComment;
