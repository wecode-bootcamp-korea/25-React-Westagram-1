import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

class CommentWnd extends React.Component {
  showComment = () => {
    const { commentsInfo, deleteComment } = this.props;

    return commentsInfo.list.map(e => (
      <li className="feeds-main__comments__content" key={e.key}>
        <div className="comment-wrapper">
          <span className="username">{e.name} </span>
          {e.comment}
        </div>
        <FontAwesomeIcon
          icon={faBackspace}
          onClick={() => deleteComment(e.key)}
        />
      </li>
    ));
  };

  render() {
    return <ul>{this.showComment()}</ul>;
  }
}

export default CommentWnd;
