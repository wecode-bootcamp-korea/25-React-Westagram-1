import React, { Component } from 'react';
import AddComment from './AddComment';

class CommentList extends Component {
  render() {
    const { content } = this.props;
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
          {/* 고정된 댓글 */}
        </ul>
        <AddComment content={content} />
      </>
    );
  }
}

export default CommentList;
