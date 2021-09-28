import { Component } from 'react';

class UploadComment extends Component {
  constructor() {
    super();
    this.state = {
      commentHeartBtn: false,
    };
  }

  CommentHeartBtnActive = () => {
    this.setState({
      commentHeartBtn: !this.state.commentHeartBtn,
    });
  }; // 좋아요 기능 - 하트 클릭시 진한 컬러 하트로 변경

  render() {
    const { comment, deleteComment } = this.props;
    return (
      <>
        <li className="commentLi" key={comment.id}>
          <span>
            <b>{comment.name}</b>&nbsp;
            {comment.content}
          </span>
          <span>
            <span className="commentIcon">
              <img
                src={
                  this.state.commentHeartBtn
                    ? './images/miyeon/heart2.png'
                    : 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
                }
                onClick={this.CommentHeartBtnActive}
                alt="heart3"
              />
              &nbsp;&nbsp;
              <img
                src="./images/miyeon/trash.png"
                onClick={() => deleteComment(comment.id)}
                alt="deleteComment"
              />
            </span>
            <span></span>
          </span>
        </li>
      </>
    );
  }
}

export default UploadComment;
