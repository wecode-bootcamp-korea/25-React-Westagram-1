import React from 'react';
import CommentWnd from './CommentWnd';
import CommentForm from './CommentForm';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsInfo: {
        list: [],
        nextKey: null,
      },
    };
  }

  componentDidMount() {
    this.initComment();
  }

  initComment = () => {
    fetch('http://localhost:3000/chanyoung/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState(() => ({
          commentsInfo: {
            list: data,
            nextKey: data.length + 1,
          },
        }));
      });
  };

  addCommnet = e => {
    e.preventDefault();
    const { nextKey } = this.state.commentsInfo;
    const newComment = {
      key: nextKey,
      name: '정찬영',
      comment: e.target[0].value,
    };

    this.setState(({ commentsInfo: { list } }) => {
      return {
        commentsInfo: {
          list: [...list, newComment],
          nextKey: nextKey + 1,
        },
      };
    });
    e.target[0].value = '';
  };

  deleteComment = key => {
    this.setState(({ commentsInfo: { list, nextKey } }) => ({
      commentsInfo: {
        list: list.filter(e => key !== e.key),
        nextKey: nextKey,
      },
    }));
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
