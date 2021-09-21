import React from 'react';
import CommentWnd from './CommentWnd';
import CommentForm from './CommentForm';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsInfo: [
        { key: 1, name: 'Dochi', comment: '너무 귀엽다~😄' },
        { key: 2, name: 'Puuuooo', comment: '역시 말티즈야' },
      ],
    };
  }

  addCommnet = e => {
    e.preventDefault();
    const { commentsInfo } = this.state;
    const key =
      commentsInfo.length === 0
        ? 1
        : commentsInfo[commentsInfo.length - 1].key + 1;

    this.setState(
      (this.state.commentsInfo = [
        ...commentsInfo,
        {
          key: key,
          name: '정찬영',
          comment: e.target[0].value,
        },
      ])
    );
    e.target[0].value = '';
  };

  deleteComment = key => {
    this.setState(
      (this.state.commentsInfo = this.state.commentsInfo.filter(
        e => key !== e.key
      ))
    );
  };

  render() {
    return (
      <div className="feeds-main__comments">
        <CommentWnd
          commentsInfo={this.state.commentsInfo}
          deleteComment={this.deleteComment}
        />
        <div className="feeds-main__comment-time">42분전</div>
        <CommentForm addCommnet={this.addCommnet} />
      </div>
    );
  }
}

export default Comment;
