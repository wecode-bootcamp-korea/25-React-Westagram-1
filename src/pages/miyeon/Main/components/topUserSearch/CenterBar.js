import React, { Component } from 'react';
import NavUserSearch from './NavUserSearch';

class CenterBar extends Component {
  constructor() {
    super();
    this.state = {
      searchLayer: false,
      searchKeyword: '',
      users: [
        {
          no: 1,
          id: 'mydog_syuli',
          profileImg: './images/miyeon/user1.jpg',
          description: '작고 소중한 강아지 셜리',
        },
        {
          no: 2,
          id: 'v_ddabong_v',
          profileImg: './images/miyeon/user2.jpg',
          description: '백신 2차 접종 완료! 쌍따봉 v^^v',
        },
        {
          no: 3,
          id: 'iwascar',
          profileImg: './images/miyeon/user3.jpg',
          description: '나는 고양이 차였다',
        },
        {
          no: 4,
          id: 'nyangX2_punch',
          profileImg: './images/miyeon/cat3.jpg',
          description: '큐티깜찍 하얀 고앵이',
        },
        {
          no: 5,
          id: 'bluecat',
          profileImg: './images/miyeon/cat1.jpg',
          description: '하늘을 날고 싶은 냥냥이',
        },
      ],
    };
  }

  topInputLayer = e => {
    const { searchKeyword, searchLayer } = this.state;
    this.setState({
      searchKeyword: e.target.value,
      searchLayer: true,
    });
  };

  searchBar = () => {
    this.setState({
      searchLayer: !this.state.searchLayer,
    });
  }; // input을 클릭하면 user 리스트창 off

  render() {
    return (
      <div className="centerBar">
        <input
          className="searchBar"
          type="text"
          placeholder="검색"
          onChange={this.topInputLayer}
          onClick={this.searchBar}
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
                } else {
                  return '일치하는 없없습습니니다다 ';
                }
              })
              .map(userArr => {
                return <NavUserSearch usersInfo={userArr} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CenterBar;
