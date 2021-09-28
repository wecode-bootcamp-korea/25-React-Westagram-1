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
        <div className="feeds-header">
          <div className="feeds-header__user">
            <img className="user-img" src={e.userImg} alt="" />
            <span className="username">{e.userName}</span>
          </div>
          <FontAwesomeIcon className="i" icon={faEllipsisH} />
        </div>
        <img className="feeds-img" src={e.feedImg} alt="" />
        <div className="feeds-main">
          <div className="feeds-main__icons">
            <div className="feeds-main__icons--left">
              <FontAwesomeIcon className="i" icon={faHeart} />
              <FontAwesomeIcon className="i" icon={faComment} />
              <FontAwesomeIcon className="i" icon={faUpload} />
            </div>
            <FontAwesomeIcon className="i" icon={faBookmark} />
          </div>
          <div className="feeds-main__like">
            <img className="user-img" src={e.likeUserImg} alt="" />
            <span className="username">{e.likeUserName}</span>님 외{' '}
            <span className="feeds-main__like__count">{e.likeUserCount}</span>
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
