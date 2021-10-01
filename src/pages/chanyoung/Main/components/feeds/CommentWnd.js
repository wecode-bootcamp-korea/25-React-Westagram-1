import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

class CommentWnd extends React.Component {
  render() {
    const { commentsInfo, deleteComment } = this.props;

    return (
      <ul>
        {commentsInfo.list.map(comment => (
          <li className="content" key={comment.key}>
            <div>
              <span className="username">{comment.name} </span>
              {comment.comment}
            </div>
            <FontAwesomeIcon
              icon={faBackspace}
              onClick={() => deleteComment(comment.key)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentWnd;
