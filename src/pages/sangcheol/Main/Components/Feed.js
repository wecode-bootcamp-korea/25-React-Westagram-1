import React, { Component } from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

class Feed extends Component {
  render() {
    const { inputKeyword, commentBox, handleInput, handleSubmit } = this.props;

    return (
      <div className="feeds">
        <div className="user-id-box">
          <img src="./images/sangcheol/wecodeLogo.jpeg" alt="logo" />
          <div className="user-id-box-text">
            <div>Xangcheol</div>
            <div>Byron Bay </div>
          </div>
        </div>

        <div className="feed-img-section">
          <img src="./images/sangcheol/피드용 사진.jpeg" alt="img" />
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
                src="./images/sangcheol/위코드 피드사진.jpeg"
                alt="profile"
              />
              <span>
                xangcheol님 <strong>외 25명</strong>이 좋아합니다.
              </span>
            </div>
            <CommentList commentBox={commentBox} />
            <ul className="main-icon-like-text-write_comment">
              {commentBox.map((el, idx) => {
                return (
                  <li key={idx + 1}>
                    <span className="userName">Xangcheol</span>
                    <span className="main-icon-like-text-write-subtext">
                      {el}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="main-icon-like-text-write-footer">1시간 전</div>
          </div>
        </div>
        <Comment
          inputKeyword={inputKeyword}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}
export default Feed;
