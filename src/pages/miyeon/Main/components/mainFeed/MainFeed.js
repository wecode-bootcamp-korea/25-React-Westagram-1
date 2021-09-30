import React, { Component } from 'react';
import Comment from '../feedComment/Comment';

class Mainfeed extends Component {
  constructor() {
    super();
    this.state = {
      heartBtn: false,
    };
  }

  heartBtnActive = () => {
    this.setState({
      heartBtn: !this.state.heartBtn,
      likeNumber: !this.state.heartBtn
        ? this.state.likeNumber + 1
        : this.state.likeNumber - 1,
    });
  }; // 좋아요 기능 - 하트 클릭시 진한 컬러 하트로 변경

  render() {
    const { userData } = this.props;
    return (
      <article className="wrapper">
        <div className="feedHeader">
          <div className="headerLeft">
            <img
              className="catProfilePhoto2"
              src={userData.userProfileImg}
              alt="my cutie cat"
            />
            <div className="myName">{userData.userID}</div>
          </div>
          <div className="headerRight">
            <img src="./images/miyeon/more.png" alt="more" />
          </div>
        </div>
        <div className="feedImage">
          <img className="myCat" src={userData.feedImg} alt="cat1" />
        </div>
        <div className="imageBottom">
          <div className="bottomLeft">
            <span className="heartBar" onClick={this.heartBtnActive}>
              <img
                src={
                  this.state.heartBtn
                    ? './images/miyeon/heart2.png'
                    : './images/miyeon/heart.png'
                }
                alt="heart2"
                onClick={this.likeNumberPlus}
              />
            </span>
            <img src="./images/miyeon/comment.png" alt="comment" />
            <img src="./images/miyeon/upload.png" alt="upload" />
          </div>
          <div className="bottomRight">
            <img
              className="save"
              src="./images/miyeon/save.png"
              alt="content save"
            />
          </div>
        </div>
        <div className="whosLike">
          <div className="likePhoto">
            <img
              className="catProfilePhoto4"
              src={userData.userProfileImg}
              alt="cat2"
            />
          </div>
          <div className="likeWho">
            <b>{userData.userID}</b>님 <b>외 {userData.likeNumber}명이</b>
            &nbsp; 좋아합니다.
          </div>
        </div>
        <div className="feedContent">
          <b>{userData.userID}</b>&nbsp; {userData.feedContent}
        </div>
        <Comment fixComment={userData.feedComment} />
      </article>
    );
  }
}

export default Mainfeed;
