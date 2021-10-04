import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StoryUser extends Component {
  render() {
    const { storyUser } = this.props;
    return (
      <div className="user">
        <img src={storyUser.profileImg} alt={storyUser.imgAlt} />
        <div className="userID">
          <Link to="#" className="whatID">
            <b>{storyUser.user_id}</b>
          </Link>
          <p className="beforeUpload">{storyUser.uploadTimeMinute}분 전</p>
        </div>
      </div>
    );
  }
}

export default StoryUser;
