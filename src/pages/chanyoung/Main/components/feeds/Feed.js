import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faHeart,
  faComment,
  faUpload,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = { feedsInfo: [] };
  }

  initFeeds = () => {
    fetch('http://localhost:3000/chanyoung/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedsInfo: data,
        });
      });
  };

  componentDidMount() {
    this.initFeeds();
  }

  showFeeds() {
    // div로 감싸는게 맞는지..
    return this.state.feedsInfo.map(e => (
      <div key={e.key}>
        <div className="header">
          <div className="user">
            <img className="img" src={e.userImg} alt="FeedheaderUserImg" />
            <span className="name">{e.userName}</span>
          </div>
          <FontAwesomeIcon className="i" icon={faEllipsisH} />
        </div>
        <img className="bigImg" src={e.feedImg} alt="FeedImg" />
        <div className="main">
          <div className="icons">
            <div className="left">
              <FontAwesomeIcon className="i" icon={faHeart} />
              <FontAwesomeIcon className="i" icon={faComment} />
              <FontAwesomeIcon className="i" icon={faUpload} />
            </div>
            <FontAwesomeIcon className="i" icon={faBookmark} />
          </div>
          <div className="like">
            <img className="userImg" src={e.likeUserImg} alt="likeImg" />
            <span className="userName">{e.likeUserName}</span>님 외{' '}
            <span className="count">{e.likeUserCount}</span>
            명이 좋아합니다
          </div>
          <Comment />
        </div>
      </div>
    ));
  }

  render() {
    return <section className="feeds">{this.showFeeds()}</section>;
  }
}

export default Feed;
