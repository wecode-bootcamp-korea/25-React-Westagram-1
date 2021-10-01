import React, { Component } from 'react';

class HeadInfo extends Component {
  render() {
    const { profileId, profileImg, id } = this.props.header;
    return (
      <div className="story-list-box">
        <a className="story-a" href>
          <img className="story-img" src={profileImg} alt={'`user ${id}`'} />
        </a>
        <a className="small-basic2" href>
          {profileId}
        </a>
      </div>
    );
  }
}

export default HeadInfo;
