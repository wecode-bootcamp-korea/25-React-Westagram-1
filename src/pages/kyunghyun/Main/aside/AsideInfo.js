import React, { Component } from 'react';

class AsideInfo extends Component {
  render() {
    const { profileId, profileComment, profileImg, id } = this.props.aside;
    return (
      <div className="article-header">
        <div className="article-div">
          <div className="article-header-profile">
            <a
              className="article-header-profile-link"
              href="https://www.instagram.com/kich555/"
            >
              <img
                className="article-header-profile-img"
                src={profileImg}
                alt=""
              />
            </a>
          </div>
          <div className="span-box">
            <span className="bold">{profileId}</span>
            <span className="small-basic">{profileComment}</span>
          </div>
        </div>
        <div>
          <a className="change-btn">팔로우</a>
        </div>
      </div>
    );
  }
}

export default AsideInfo;
