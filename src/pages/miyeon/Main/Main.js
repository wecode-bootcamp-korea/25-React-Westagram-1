import { Component } from 'react';
import Comment from './Comment';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainMiyeon">
        <header className="mainHeader">
          <nav className="mainNav">
            <div className="leftBar">
              <span className="catstaLogo">
                <img src="./images/miyeon/catFoot.png" className="catFoot" />
              </span>
              <a href="/Main-MiYeon" className="catstaText">
                <h1 className="catstaLogo2">catstagram</h1>
              </a>
            </div>
            <div className="centerBar">
              <input type="text" placeholder="검색" className="searchBar" />
              <span className="searchIcon">
                <i className="fas fa-search" />
              </span>
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
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="profile"
              />
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
                <img src="./images/miyeon/heart.png" alt="heart2" />
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
                    <a href="../Login.js" className="whatID">
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
                    <a href="../Login.js" className="whatID">
                      <b>v_ddabong_v</b>
                    </a>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/user3.jpg" alt="3d cat car" />
                  <div className="userID">
                    <a href="../Login.js" className="whatID">
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
                    <a href="../Login.js" className="whatID">
                      <b>bluecat</b>
                    </a>
                    <p className="beforeUpload">16분 전</p>
                  </div>
                </div>
                <div className="user2">
                  <img src="./images/miyeon/user4.jpg" alt="3d cat" />
                  <div className="userID">
                    <a href="../Login.js" className="whatID">
                      <b>cat_choding</b>
                    </a>
                    <p className="beforeUpload">1시간 전</p>
                  </div>
                </div>
                <div className="user3">
                  <img src="./images/miyeon/cat3.jpg" alt="white cat" />
                  <div className="userID">
                    <a href="../Login.js" className="whatID">
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

export default Main;
