import { Component } from 'react';
import Comment from './components/Comment';
import NavUserSearch from './components/NavUserSearch';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      heartBtn: false,
      profileLayer: false,
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
    if (document.getElementsByClassName('searchBar')[0].value === '') {
      this.searchBar();
    }
    // const abc = users.filter(user => user.id.startsWith('searchKeyword'));
  };

  searchBar = () => {
    this.setState({
      searchLayer: false,
    });
  };

  heartBtnActive = () => {
    this.setState({
      heartBtn: !this.state.heartBtn,
    });
  };

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
              <a href="/Main-MiYeon" className="catstaText">
                <h1 className="catstaLogo2">catstagram</h1>
              </a>
            </div>
            <div className="centerBar">
              <input
                className="searchBar"
                type="text"
                placeholder="검색"
                onChange={this.topInputLayer}
              />
              <span className="searchIcon">
                <i className="fas fa-search" />
              </span>
              <div
                className={this.state.searchLayer ? 'searchOn' : 'searchOff'}
              >
                <ul className="searchUsersul">
                  {this.state.users.map(people => {
                    return <NavUserSearch usersInfo={people} />;
                  })}
                </ul>
              </div>
            </div>
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
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
                      프로필
                    </li>
                    <li>
                      <img src="./images/miyeon/save.png" />
                      저장됨
                    </li>
                    <li>
                      <img src="./images/miyeon/upload.png" />
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
          <article className="wrapper">
            <div className="feedHeader">
              <div className="headerLeft">
                <img
                  className="catProfilePhoto2"
                  src="./images/miyeon/buzzi.jpg"
                  alt="my cutie cat"
                />
                <div className="myName">buzzi_nyang</div>
              </div>
              <div className="headerRight">
                <img src="./images/miyeon/more.png" alt="more" />
              </div>
            </div>
            <div className="feedImage">
              <img className="myCat" src="./images/miyeon/cat.jpg" alt="cat1" />
            </div>
            <div className="imageBottom">
              <div className="bottomLeft">
                <span className="heartBar" onClick={this.heartBtnActive}>
                  <img
                    src={
                      this.state.heartBtn
                        ? './images/miyeon/heart2.png'
                        : './images/miyeon/heart.png'
                    }
                    alt="heart2"
                  />
                </span>
                <img src="./images/miyeon/comment.png" alt="comment" />
                <img src="./images/miyeon/upload.png" alt="upload" />
              </div>
              <div className="bottomRight">
                <img
                  className="save"
                  src="./images/miyeon/save.png"
                  alt="content save"
                />
              </div>
            </div>
            <div className="whosLike">
              <div className="likePhoto">
                <img
                  className="catProfilePhoto4"
                  src="./images/miyeon/buzzi.jpg"
                  alt="cat2"
                />
              </div>
              <div className="likeWho">
                <b>buzzi_nyang</b>님 <b>외 2명이</b> 좋아합니다.
              </div>
            </div>
            <div className="feedContent">
              <b>buzzi_nyang</b>&nbsp; 박버찌 기다려.. 집사가 곧 냥줍 하러
              간다..
            </div>
            <Comment />
          </article>
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
                    <a href="#" className="whatID">
                      <b>mydog_syuli</b>
                    </a>
                    <p className="beforeUpload">16분 전</p>
                  </div>
                </div>
                <div className="user2">
                  <img
                    src="./images/miyeon/user2.jpg"
                    alt="corona 2nd complete"
                  />
                  <div className="userID">
                    <a href="#" className="whatID">
                      <b>v_ddabong_v</b>
                    </a>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/user3.jpg" alt="3d cat car" />
                  <div className="userID">
                    <a href="#" className="whatID">
                      <b>iwascar</b>
                    </a>
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
                    <a href="#" className="whatID">
                      <b>bluecat</b>
                    </a>
                    <p className="beforeUpload">16분 전</p>
                  </div>
                </div>
                <div className="user2">
                  <img src="./images/miyeon/user4.jpg" alt="3d cat" />
                  <div className="userID">
                    <a href="#" className="whatID">
                      <b>cat_choding</b>
                    </a>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/cat3.jpg" alt="white cat" />
                  <div className="userID">
                    <a href="#" className="whatID">
                      <b>nyangX2_punch</b>
                    </a>
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
