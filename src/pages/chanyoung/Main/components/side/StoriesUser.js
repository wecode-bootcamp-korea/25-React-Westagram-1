import React from 'react';

class StoriesUser extends React.Component {
  render() {
    const { src, alt, username, time } = this.props.userData;
    return (
      <div className="storiesUser">
        <img className="userImg" src={src} alt={alt} />
        <div className="storiesUserText">
          <span className="username">{username}</span>
          <span className="storiesUserTime">{time}</span>
        </div>
      </div>
    );
  }
}

export default StoriesUser;
