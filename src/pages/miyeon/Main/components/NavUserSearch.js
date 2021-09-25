import React, { Component } from 'react';

class NavUserSearch extends Component {
  render() {
    const { usersInfo } = this.props;
    return (
      <li className="searchUsers" key={usersInfo.no}>
        <img src={usersInfo.profileImg} />
        <p className="searchUsersInfo">
          <b>{usersInfo.id}</b>
          <br /> {usersInfo.description}
        </p>
      </li>
    );
  }
}

export default NavUserSearch;
