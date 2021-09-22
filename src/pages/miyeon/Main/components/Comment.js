import { Component } from 'react';
import UploadComment from './UploadComment';

export default class Comment extends Component {
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
    const { commentList } = this.state;
    const newArr = [
      ...commentList,
      {
        id: commentList.length + 1,
        name: 'buzzi_nyang',
        content: e.target.value,
      },
    ];
    this.setState({
      commentList: newArr,
    });
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
          {this.state.commentList.map(comm => {
            return <UploadComment comment={comm} />;
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
          >
            게시
          </button>
        </form>
      </>
    );
  }
}
