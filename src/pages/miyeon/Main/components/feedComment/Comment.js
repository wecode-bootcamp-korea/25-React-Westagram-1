import { Component } from 'react';
import UploadComment from './UploadComment';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      commentList: [],
      fixCommentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/miyeon/data/MainFeed.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          fixcommentList: data.feedComment,
        })
      );
  }

  handleInput = e => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  addMyComment = e => {
    e.preventDefault();
    const { commentList, inputVal } = this.state;
    const newArr = [
      ...commentList,
      {
        id: commentList.length + 1,
        name: 'buzzi_nyang',
        content: inputVal,
      },
    ];
    this.setState({
      commentList: newArr,
      inputVal: '', // state 값만 빈값으로 되고, input창의 value 텍스트는 지워지지 않았음
    });
  };

  uploadDeleteComment = id => {
    const deleteMyComment1 = this.state.commentList.filter(
      comment => comment.id !== id
    );
    this.setState({
      commentList: deleteMyComment1,
    });
  };

  fixDeleteComment = id => {
    const deleteMyComment2 = this.state.fixCommentList.filter(
      comment => comment.id !== id
    );
    this.setState({
      fixCommentList: deleteMyComment2,
    });
  };

  render() {
    const { inputVal } = this.state;
    const { fixComment, uploadTime } = this.props;
    return (
      <>
        <ul className="commentList">
          {fixComment.map(comm => {
            return (
              <UploadComment
                comment={comm}
                deleteComment={this.fixDeleteComment}
                key={comm.id}
              />
            );
          })}
          {/* 피드마다 고정된 댓글 */}
          {this.state.commentList.map(comm => {
            return (
              <UploadComment
                comment={comm}
                deleteComment={this.uploadDeleteComment}
                key={comm.id}
              />
            );
          })}
          {/* 업로드되는 댓글 */}
        </ul>
        <div className="time">{uploadTime}분 전</div>
        <form className="commentInput" onSubmit={this.addMyComment}>
          <input
            className="comment"
            placeholder="댓글 달기..."
            value={inputVal}
            onChange={this.handleInput}
          />
          <button
            id="textUpload"
            style={{
              color: this.state.inputVal.length > 0 ? '#0095f6' : '#b9def7',
            }}
            disabled={this.state.inputVal.length > 0 ? '' : 'disabled'}
          >
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
