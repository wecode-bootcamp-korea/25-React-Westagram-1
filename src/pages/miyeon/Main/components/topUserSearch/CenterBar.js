import React, { Component } from 'react';
import NavUserSearch from './NavUserSearch';

class CenterBar extends Component {
  constructor() {
    super();
    this.state = {
      searchLayer: false,
      searchKeyword: '',
      users: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/miyeon/data/userListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data,
        })
      );
  }

  topInputLayer = e => {
    this.setState({
      searchKeyword: e.target.value,
      searchLayer: true,
    });
  };

  render() {
    return (
      <div className="centerBar">
        <input
          className="searchBar"
          placeholder="검색"
          onChange={this.topInputLayer}
          onFocus={e => {
            this.setState({
              searchLayer: !this.state.searchLayer,
            }); // input을 클릭하면 user 리스트창 off
          }}
        />
        <div className={this.state.searchLayer ? 'searchOn' : 'searchOff'}>
          <ul className="searchUsersul">
            {this.state.users
              .filter(peopleArr => {
                if (this.state.searchKeyword === '') {
                  return peopleArr;
                } else if (
                  peopleArr.id
                    .toLowerCase()
                    .includes(this.state.searchKeyword.toLowerCase())
                ) {
                  return peopleArr;
                }
              })
              .map(userArr => {
                return <NavUserSearch usersInfo={userArr} key={userArr.no} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CenterBar;
