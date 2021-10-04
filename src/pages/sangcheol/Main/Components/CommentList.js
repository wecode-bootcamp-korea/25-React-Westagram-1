import React, { Component } from 'react';
import AddComment from './AddComment';

class CommentList extends Component {
  render() {
    const { content, comment } = this.props;
    return (
      <>
        <ul className="main-icon-like-text-write_commentbox">
          {content.map(el => {
            return (
              <li key={el.id}>
                <span className="userName">{el.userId}</span>
                <span className="main-icon-like-text-write-subtext">
                  {el.content}
                </span>
              </li>
            );
          })}
        </ul>
        <AddComment comment={comment} />
      </>
    );
  }
}

export default CommentList;
