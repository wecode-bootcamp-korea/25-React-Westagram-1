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
    console.log(this.state.commentVal);
  };

  commentUpload = () => {
    const { commentList, commentVal } = this.state;
    this.setState({
      commenList: commentList.concat([commentVal]),
    });
  }; // 댓글 게시 버튼 클릭시 댓글 내용을 state에 저장

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
        </ul>
        <div className="time">50분 전</div>
        <form className="commentInput" onChange={this.commentUploadFromEnter}>
          <input
            className="comment"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.commentInput}
          />
          <button id="textUpload" onClick={this.commentUpload}>
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
