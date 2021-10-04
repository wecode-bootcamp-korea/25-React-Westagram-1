import { Component } from 'react';
import CenterBar from './components/topUserSearch/CenterBar';
import MainFeed from './components/mainFeed/MainFeed';
import SideBar from './components/sideBar/SideBar';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      profileLayer: false,
      feedInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/miyeon/data/mainFeed.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedInfo: data,
        })
      );
  }

  clickProfile = () => {
    this.setState({
      profileLayer: !this.state.profileLayer,
    });
  };

  render() {
    return (
      <div className="mainMiyeon">
        <header className="mainHeader">
          <nav className="mainNav">
            <div className="leftBar">
              <span className="catstaLogo">
                <img
                  src="./images/miyeon/catFoot.png"
                  className="catFoot"
                  alt="catFoot1"
                />
              </span>
              <span href="/Main-MiYeon" className="catstaText">
                <h1 className="catstaLogo2">catstagram</h1>
              </span>
            </div>
            <CenterBar />
            <div className="rightBar">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="explore"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
              <span onClick={this.clickProfile}>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="profile"
                />
                <div
                  className={
                    this.state.profileLayer ? 'myProfileOn' : 'myProfileOff'
                  }
                >
                  <ul className="myProfileList">
                    <li>
                      <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                        alt="profile"
                      />
                      프로필
                    </li>
                    <li>
                      <img src="./images/miyeon/save.png" alt="jujang" />
                      저장됨
                    </li>
                    <li>
                      <img src="./images/miyeon/upload.png" alt="suljung" />
                      설정
                    </li>
                    <li>로그아웃</li>
                  </ul>
                </div>
              </span>
            </div>
          </nav>
        </header>

        <section className="mainSection">
          <div>
            {this.state.feedInfo.map(user => {
              return (
                <MainFeed
                  userData={user}
                  key={user.no}
                  likeNumber={user.likeNumber}
                />
              );
            })}
          </div>
          <SideBar />
        </section>
      </div>
    );
  }
}

export default Main;
