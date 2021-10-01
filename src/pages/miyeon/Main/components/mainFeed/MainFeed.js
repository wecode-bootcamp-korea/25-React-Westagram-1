import { thisExpression } from '@babel/types';
import React, { Component } from 'react';
import Comment from '../feedComment/Comment';

class Mainfeed extends Component {
  constructor() {
    super();
    this.state = {
      heartBtn: false,
      likeNumber: 0,
    };
  }

  heartBtnActive = () => {
    const { heartBtn } = this.state;
    this.setState({
      heartBtn: !heartBtn,
      likeNumber: !heartBtn
        ? this.props.likeNumber + 1
        : this.props.likeNumber - 1,
    });
  };

  render() {
    const { userData, likeNumber } = this.props;
    return (
      <article className="wrapper">
        <div className="feedHeader">
          <div className="headerLeft">
            <img
              className="catProfilePhoto2"
              src={userData.userProfileImg}
              alt="my cutie cat"
            />
            <div className="myName">{userData.user_id}</div>
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
            <b>{userData.user_id}</b>님 <b>외 {likeNumber}명이</b>
            &nbsp; 좋아합니다.
          </div>
        </div>
        <div className="feedContent">
          <b>{userData.user_id}</b>&nbsp; {userData.feedContent}
        </div>
        <Comment
          uploadTime={userData.uploadTime}
          fixComment={userData.feedComment}
        />
      </article>
    );
  }
}

export default Mainfeed;
