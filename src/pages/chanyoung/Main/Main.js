import React from 'react';
import Feed from './components/feeds/Feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="chanyoungMain">
        <header>
          <ul className="ul">
            <li className="title">
              <FontAwesomeIcon icon={faCamera} /> | Westagram
            </li>
            <li className="search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="검색" />
              <div className="userContainer"></div>
            </li>
            <nav>
              <ul className="menu">
                <li>
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    alt="search"
                  />
                </li>
                <li>
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="heart"
                  />
                </li>
                <li className="profile">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    alt="mypage"
                  />
                  <div className="profileBox">
                    <span>Profile</span>
                    <span>Edit</span>
                    <span>Setting</span>
                  </div>
                </li>
              </ul>
            </nav>
          </ul>
        </header>
        <main>
          <Feed />
          <section className="side">
            <div className="header">
              <img
                className="userImg"
                src="/images/chanyoung/cat2.jpg"
                alt="cat2"
              />
              <div className="headerTitle">
                <span className="username">wecode_bootcamp</span>
                <span className="headerTitle--sub">WeCode | 위코드</span>
              </div>
            </div>
            <div className="stories">
              <div className="storiesHeader">
                <span className="storiesHeaderTitle">스토리</span>
                <span className="storiesHeaderAll">모두 보기</span>
              </div>
              <div className="storiesUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/cat3.jpg"
                  alt="cat3"
                />
                <div className="storiesUserText">
                  <span className="username">_yum_s</span>
                  <span className="storiesUserTime">16분 전</span>
                </div>
              </div>
              <div className="storiesUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/cat1.jpg"
                  alt="cat1"
                />
                <div className="storiesUserText">
                  <span className="username">drink_eat_drink</span>
                  <span className="storiesUserTime">3시간 전</span>
                </div>
              </div>
              <div className="storiesUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/dog1.jpg"
                  alt="dog1"
                />
                <div className="storiesUserText">
                  <span className="username">hyukyc</span>
                  <span className="storiesUserTime">20시간 전</span>
                </div>
              </div>
              <div className="storiesUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/dog2.jpg"
                  alt="dog2"
                />
                <div className="storiesUserText">
                  <span className="username">_yum_s</span>
                  <span className="storiesUserTime">16분 전</span>
                </div>
              </div>
            </div>
            <div className="recommends">
              <div className="recommendsHeader">
                <span className="recommendsHeaderTitle">스토리</span>
                <span className="recommendsHeaderAll">모두 보기</span>
              </div>
              <div className="recommendsUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/cat3.jpg"
                  alt="cat3"
                />
                <div className="recommendsUserText">
                  <span className="username">_yum_s</span>
                  <span className="recommendsUserTime">16분 전</span>
                </div>
              </div>
              <div className="recommendsUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/cat1.jpg"
                  alt="cat1"
                />
                <div className="recommendsUserText">
                  <span className="username">drink_eat_drink</span>
                  <span className="recommendsUserTime">3시간 전</span>
                </div>
              </div>
              <div className="recommendsUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/dog1.jpg"
                  alt="dog1"
                />
                <div className="recommendsUserText">
                  <span className="username">hyukyc</span>
                  <span className="recommendsUserTime">20시간 전</span>
                </div>
              </div>
              <div className="recommendsUser">
                <img
                  className="userImg"
                  src="/images/chanyoung/dog2.jpg"
                  alt="dog2"
                />
                <div className="recommendsUserText">
                  <span className="username">_yum_s</span>
                  <span className="recommendsUserTime">16분 전</span>
                </div>
              </div>
            </div>
            <footer>
              <p>
                westargram
                정보﹒지원﹒홍보﹒센터﹒API﹒채용﹒정보﹒개인정보관리방침﹒약관﹒디렉터리﹒프로필﹒해시태그﹒언어
              </p>
              <span>@ 2019 WESTARGRAM</span>
            </footer>
          </section>
        </main>
        <script
          src="https://kit.fontawesome.com/06f8efddbf.js"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

export default Main;
