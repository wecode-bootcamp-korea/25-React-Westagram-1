import React, { Component } from 'react';

class NavUserSearch extends Component {
  render() {
    const { usersInfo } = this.props;
    return (
      <li className="searchUsers">
        <img src={usersInfo.profileImg} alt="userProfileImg" />
        <p className="searchUsersInfo">
          <b>{usersInfo.id}</b>
          <br /> {usersInfo.description}
        </p>
      </li>
    );
  }
}

export default NavUserSearch;
