import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Main.scss';
import Feed from './components/feeds/Feed';

class Main extends React.Component {
  render() {
    return (
      <div className="ChanYoungMain">
        <header>
          <ul className="header__ul">
            <li className="header__title">
              <FontAwesomeIcon className="i" icon={faCamera} /> | Westagram
            </li>
            <li className="header__search">
              <FontAwesomeIcon className="i" icon={faSearch} />
              <input type="text" placeholder="검색" />
              <div className="header__search__user-container"></div>
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
                <li className="menu-profile">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    alt="mypage"
                  />
                  <div className="menu-profile-box">
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
            <div className="side-header">
              <img
                className="user-img"
                src="/images/chanyoung/cat2.jpg"
                alt=""
              />
              <div className="side-header__title">
                <span className="username">wecode_bootcamp</span>
                <span className="side-header__title--sub">WeCode | 위코드</span>
              </div>
            </div>
            <div className="side-stories">
              <div className="side-stories-header">
                <span className="side-stories-header--title">스토리</span>
                <span className="side-stories-header--all">모두 보기</span>
              </div>
              <div className="side-stories-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/cat3.jpg"
                  alt=""
                />
                <div className="side-stories-user__text">
                  <span className="username">_yum_s</span>
                  <span className="side-stories-user__time">16분 전</span>
                </div>
              </div>
              <div className="side-stories-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/cat1.jpg"
                  alt=""
                />
                <div className="side-stories-user__text">
                  <span className="username">drink_eat_drink</span>
                  <span className="side-stories-user__time">3시간 전</span>
                </div>
              </div>
              <div className="side-stories-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/dog1.jpg"
                  alt=""
                />
                <div className="side-stories-user__text">
                  <span className="username">hyukyc</span>
                  <span className="side-stories-user__time">20시간 전</span>
                </div>
              </div>
              <div className="side-stories-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/dog2.jpg"
                  alt=""
                />
                <div className="side-stories-user__text">
                  <span className="username">_yum_s</span>
                  <span className="side-stories-user__time">16분 전</span>
                </div>
              </div>
            </div>
            <div className="side-recommends">
              <div className="side-recommends-header">
                <span className="side-recommends-header--title">스토리</span>
                <span className="side-recommends-header--all">모두 보기</span>
              </div>
              <div className="side-recommends-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/cat3.jpg"
                  alt=""
                />
                <div className="side-recommends-user__text">
                  <span className="username">_yum_s</span>
                  <span className="side-recommends-user__time">16분 전</span>
                </div>
              </div>
              <div className="side-recommends-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/cat1.jpg"
                  alt=""
                />
                <div className="side-recommends-user__text">
                  <span className="username">drink_eat_drink</span>
                  <span className="side-recommends-user__time">3시간 전</span>
                </div>
              </div>
              <div className="side-recommends-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/dog1.jpg"
                  alt=""
                />
                <div className="side-recommends-user__text">
                  <span className="username">hyukyc</span>
                  <span className="side-recommends-user__time">20시간 전</span>
                </div>
              </div>
              <div className="side-recommends-user">
                <img
                  className="user-img"
                  src="/images/chanyoung/dog2.jpg"
                  alt=""
                />
                <div className="side-recommends-user__text">
                  <span className="username">_yum_s</span>
                  <span className="side-recommends-user__time">16분 전</span>
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
