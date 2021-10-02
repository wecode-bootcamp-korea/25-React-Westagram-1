import React, { Component } from 'react';
import RecommendUser from './RecommendUser';
import StoryUser from './StoryUser';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      storyArr: [],
      recommendArr: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/miyeon/data/myStory.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          storyArr: data,
        })
      );
    fetch('http://localhost:3000/miyeon/data/myRecommend.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          recommendArr: data,
        })
      );
  }

  render() {
    console.log(this.state.storyArr);
    return (
      <div className="mainRight">
        <div className="myProfile">
          <div>
            <img
              className="catProfilePhoto3"
              src="./images/miyeon/buzzi.jpg"
              alt="my cutie cat"
            />
          </div>
          <div className="myName">buzzi_nyang</div>
        </div>
        <div className="sideMenu">
          <div className="sideTop">
            <div className="sideLeft">스토리</div>
            <div className="sideRight">모두 보기</div>
          </div>
          <div className="sideBottom">
            {this.state.storyArr.map(user => {
              return <StoryUser storyUser={user} key={user.id} />;
            })}
          </div>
        </div>
        <div className="sideMenu">
          <div className="sideTop">
            <div className="sideLeft">회원님을 위한 추천</div>
            <div className="sideRight">모두 보기</div>
          </div>
          <div className="sideBottom">
            {this.state.recommendArr.map(user => {
              return <RecommendUser recommendUser={user} key={user.id} />;
            })}
          </div>
        </div>
        <footer>
          <p>
            Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 ·언어
          </p>
          <p>© 2021 CATSTAGRAM</p>
        </footer>
      </div>
    );
  }
}

export default SideBar;
