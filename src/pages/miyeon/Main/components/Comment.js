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
    this.setState({
      inputVal: e.target.value,
    });
  };

  addMyComment = e => {
    e.preventDefault();
    const { commentList, inputVal, inputVal2 } = this.state;
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
            disabled={this.state.inputVal.length > 0 ? '' : 'disabled'}
          >
            게시
          </button>
        </form>
      </>
    );
  }
}
