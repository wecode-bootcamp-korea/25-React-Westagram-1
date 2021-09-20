import { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentVal: '',
      commentList: [],
    };
  }

  commentInput = e => {
    this.setState({
      commentVal: e.target.value,
    });
  }; // 댓글창 입력값을 받아 state로 저장

  commentUpload = () => {
    const { commentList, commentVal } = this.state;
    this.setState({
      commenList: commentList.concat([commentVal]),
      commentVal: '',
    });
  }; // 댓글 내용을 배열화하여 기존 commentList 배열과 합쳐서 만든 새로운 배열을 state에 저장하고, 댓글 입력값은 초기화

  commentUploadFromEnter = e => {
    if (e.key === 'Enter') this.commentUpload();
  }; // 엔터 클릭 시 똑같은 이벤트 발생

  render() {
    return (
      <>
        <ul className="commentList">
          <li className="comment1">
            <b>rrpec9</b>&nbsp; 아주 사나운 맹수네요.. 미니 호랭이..
          </li>
          <li className="comment2">
            <b>buzzi_nyang</b>&nbsp; 우리 버찌 너무 예쁘죠! 애교냥이에요~
          </li>
          {this.state.commentList.map(com => (
            <li>{com}</li>
          ))}
        </ul>
        <div className="time">50분 전</div>
        <form className="commentInput" onSubmit={this.commentUpload}>
          <input
            className="comment"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.commentInput}
          />
          <button id="textUpload" type="submit">
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
