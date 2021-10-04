import React, { Component } from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      inputKeyword: '',
      comment: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     comment: this.props.content,
  //   });
  // }

  handleInput = e => {
    this.setState({
      inputKeyword: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputKeyword.length === 0) return;

    this.setState({
      comment: this.state.comment.concat(this.state.inputKeyword),
      inputKeyword: '',
    });
  };
  render() {
    const {
      id,
      userId,
      userLocation,
      userImage,
      userLikedImage,
      howManyLiked,
      content,
    } = this.props;

    console.log('content', content);
    console.log('state', this.state.comment);

    return (
      <div className="feeds" key={id}>
        <div className="user-id-box">
          <img src="./images/sangcheol/wecodeLogo.jpeg" alt="logo" />
          <div className="user-id-box-text">
            <div>{userId}</div>
            <div>{userLocation}</div>
          </div>
        </div>
        <div className="feed-img-section">
          <img src={userImage} alt="img" />
        </div>
        <div className="main-icon-like-text">
          <div className="iconbox">
            <img
              src="./images/sangcheol/heart.png"
              alt="qwe"
              className="iconbox_heart"
            />
            <img src="./images/sangcheol/chat.png" alt="" />
            <img src="./images/sangcheol/send.png" alt="" />
            <i className="far fa-bookmark"></i>
          </div>

          <div className="main-like-text-box">
            <div className="main-like-text-box-image">
              <img
                className="main-like-text-box-image-main"
                src={userLikedImage}
                alt="profile"
              />
              <span>
                {userId}님 <strong>외 {howManyLiked}명</strong>이 좋아합니다.
              </span>
            </div>

            <div className="main-icon-like-text-write-footer">1시간 전</div>
          </div>
        </div>
        <CommentList content={content} />
        <Comment
          inputKeyword={this.inputKeyword}
          comment={this.state.comment}
          handleSubmit={this.handleSubmit}
          handleInput={this.state.handleInput}
        />
      </div>
    );
  }
}
export default Feed;
