import { Component } from 'react';
import CenterBar from './components/topUserSearch/CenterBar';
import MainFeed from './components/mainFeed/MainFeed';
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
    fetch('http://localhost:3000/miyeon/data/mainFeed.json', {
      method: 'GET',
    })
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
    }); // 내 프로필 클릭시 드롭 메뉴 on/off
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
              return <MainFeed userData={user} />;
            })}
          </div>
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
                <div className="user1">
                  <img src="./images/miyeon/user1.jpg" alt="my friend's dog" />
                  <div className="userID">
                    <span href="#" className="whatID">
                      <b>mydog_syuli</b>
                    </span>
                    <p className="beforeUpload">16분 전</p>
                  </div>
                </div>
                <div className="user2">
                  <img
                    src="./images/miyeon/user2.jpg"
                    alt="corona 2nd complete"
                  />
                  <div className="userID">
                    <span href="#" className="whatID">
                      <b>v_ddabong_v</b>
                    </span>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/user3.jpg" alt="3d cat car" />
                  <div className="userID">
                    <span href="#" className="whatID">
                      <b>iwascar</b>
                    </span>
                    <p className="beforeUpload">20시간 전</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sideMenu">
              <div className="sideTop">
                <div className="sideLeft">회원님을 위한 추천</div>
                <div className="sideRight">모두 보기</div>
              </div>
              <div className="sideBottom">
                <div className="user1">
                  <img src="./images/miyeon/cat1.jpg" alt="blue cat" />
                  <div className="userID">
                    <span href="#" className="whatID">
                      <b>bluecat</b>
                    </span>
                    <p className="beforeUpload">16분 전</p>
                  </div>
                </div>
                <div className="user2">
                  <img src="./images/miyeon/user4.jpg" alt="3d cat" />
                  <div className="userID">
                    <span href="#" className="whatID">
                      <b>cat_choding</b>
                    </span>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/cat3.jpg" alt="white cat" />
                  <div className="userID">
                    <span className="whatID">
                      <b>nyangX2_punch</b>
                    </span>
                    <p className="beforeUpload">20시간 전</p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="fooTer">
              <p>
                Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
                개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 ·언어
              </p>
              <p>© 2021 CATSTAGRAM</p>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
