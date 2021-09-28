import { Component } from 'react';
import UploadComment from './UploadComment';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/miyeon/data/mainFeed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          commentList: data,
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
    document.getElementsByClassName('comment')[0].value = '';
    // input창의 value 텍스트를 지움
  };

  deleteComment = id => {
    const deleteMyComment = this.state.commentList.filter(
      comment => comment.id !== id
    );
    console.log(deleteMyComment);
    this.setState({
      commentList: deleteMyComment,
    });
  };

  render() {
    return (
      <>
        <ul className="commentList">
          {this.state.commentList.map(comm => {
            return (
              <UploadComment
                comment={comm}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
        <div className="time">50분 전</div>
        <form className="commentInput" onSubmit={this.addMyComment}>
          <input
            className="comment"
            type="text"
            placeholder="댓글 달기..."
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
