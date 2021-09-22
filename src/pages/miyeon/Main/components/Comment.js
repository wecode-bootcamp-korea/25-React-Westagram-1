import { Component } from 'react';
import UploadComment from './UploadComment';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      commentList: [
        {
          id: 1,
          name: 'rrpec9',
          content: '아기맹수 버찌녀석',
        },
        {
          id: 2,
          name: 'v_ddabong_v',
          content: '집사가 기다린다 버찌야',
        },
      ],
    };
  }

  handleInput = e => {
    const newArr = [
      ...this.state.commentList,
      {
        id: this.state.commentList.length + 1,
        name: 'buzzi_nyang',
        content: e.target.value,
      },
    ];
    console.log(newArr[2]);
    this.setState({
      commentList: newArr,
    });
    console.log(newArr[2]);
  };

  addMyComment = () => {
    const { commentList, inputVal } = this.state;
    this.setState({
      commentList: commentList.concat([inputVal]),
      inputVal: '',
    });
  };

  render() {
    return (
      <>
        <ul className="commentList">
          {this.state.commentList.map((comment, index) => {
            return <UploadComment comment={comment} idx={index} />;
          })}
        </ul>
        <div className="time">50분 전</div>
        <form className="commentInput">
          <input
            className="comment"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.handleInput}
          />
          <button
            id="textUpload"
            onClick={this.addMyComment}
            style={{
              color: this.state.inputVal.length > 0 ? '#0095f6' : '#b9def7',
            }}
          >
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
