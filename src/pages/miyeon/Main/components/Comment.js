import { Component } from 'react';
import Addcomment from './Addcomment';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      commentList: [],
    };
  }

  handleInput = e => {
    this.setState({
      inputVal: e.target.value,
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
          {this.state.commentList.map((comment, idx) => {
            return (
              <li key={idx}>
                <b>buzzi_nyang</b>&nbsp;
                {comment}
              </li>
            );
          })}
          {/* <li className="comment1">
            <b>rrpec9</b>&nbsp; 아주 사나운 맹수네요.. 미니 호랭이..
          </li>
          <li className="comment2">
            <b>buzzi_nyang</b>&nbsp; 우리 버찌 너무 예쁘죠! 애교냥이에요~
          </li> */}
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
