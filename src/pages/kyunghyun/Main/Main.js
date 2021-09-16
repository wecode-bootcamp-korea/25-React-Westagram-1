import React from 'react';
// import "./Main.css"
import './Main.scss';
// import "../../style/common.scss";
class Main extends React.Component {
  render() {
    return (
      <div className="KyungHyunMain">
        <header className="main-header">
          <nav>
            <div className="home-img-box">
              <a href="https://www.instagram.com/">
                <img
                  className="home-img"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                  alt="home"
                />
              </a>
            </div>
            <div>
              <input type="text" className="search" placeholder="검색" />
            </div>
            <div className="icon-box">
              <div className="icon-box2">
                <a className="profile icon">
                  {' '}
                  <img
                    className="icon-btn"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  />
                </a>
                <a className="profile icon">
                  {' '}
                  <img
                    className="icon-btn"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </a>
                <a className="profile icon">
                  <img
                    className="profile icon-btn"
                    src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
                  />
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="main-section">
            <div className="article-box">
              <div className="story-box">
                <div className="story-space">
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                        alt="user1"
                      />
                    </a>
                    <a className="small-basic2" href>
                      doyun1359
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1592843875827-a524529cabed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        alt="user2"
                      />
                    </a>
                    <a className="small-basic2" href>
                      soolfnj
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1534390602739-373bbe1f955f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        alt="user3"
                      />
                    </a>
                    <a className="small-basic2" href>
                      g.hanane
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1603876709863-0a501b68a58d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        alt="user4"
                      />
                    </a>
                    <a className="small-basic2" href>
                      channleop
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="user5"
                      />
                    </a>
                    <a className="small-basic2" href>
                      sunisuni
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="user6"
                      />
                    </a>
                    <a className="small-basic2" href>
                      vitorio21
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        alt="user7"
                      />
                    </a>
                    <a className="small-basic2" href>
                      nyangnya29
                    </a>
                  </div>
                </div>
              </div>
              <div className="feed-box">
                <article>
                  <header className="article-header">
                    <div className="article-div">
                      <div className="article-header-profile">
                        <a
                          className="article-header-profile-link"
                          href="https://www.instagram.com/kich555/"
                        >
                          <img
                            className="article-header-profile-img"
                            src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="span-box">
                        <span>
                          <a
                            className="bold"
                            href="https://www.instagram.com/kich555/"
                          >
                            kich555
                          </a>
                        </span>
                        <span>
                          <a
                            className="sub"
                            href="https://www.instagram.com/kich555/"
                          >
                            Wecode-위코드
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="article-header-button-box">
                      <a className="article-header-button">...</a>
                    </div>
                  </header>
                  <div className="article-img">
                    <img
                      className="article-img"
                      src="https://images.unsplash.com/photo-1618141782840-40c041c58821?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
                    />
                  </div>
                  <div className="article-text">
                    <section className="article-text-icon">
                      <div className="right-icon">
                        <div className="icono-heart span" />
                        <div className="icono-disqus span" />
                        <div className="icono-locationArrow span" />
                      </div>
                      <div className="icono-bookmarkEmpty span" />
                    </section>
                    <section className="article-text1">
                      <a href="https://www.instagram.com/kich555/">
                        <img
                          className="article-text1-img"
                          src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                          alt=""
                        />
                      </a>
                      <span className="bold">nyangnya29</span>
                      <span className="basic">님 </span>
                      <span className="bold">외 284명</span>
                      <span className="basic">이 좋아합니다</span>
                    </section>
                    <div className="article-text2">
                      <span className="bold">kich555</span>
                      <span className="basic">하늘은 영어로 sky...</span>
                      <a className="view-more">더 보기</a>
                    </div>
                    <div className="article-text3" />
                    <div className="posted-time">
                      <span className="time">12시간 전</span>
                    </div>
                    <section className="comment">
                      <div className="comment-box">
                        <div className="comment-box-form">
                          <div className="comment-box-form-box">
                            <div className="article-header-profile">
                              <a
                                className="article-header-profile-link"
                                href="https://www.instagram.com/kich555/"
                              >
                                <img
                                  className="article-header-profile-img"
                                  src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <textarea
                              id="textarea"
                              placeholder="댓글 달기..."
                              defaultValue={''}
                            />
                          </div>
                          <a className="text-up-btn" onclick="pushComment()">
                            게시
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                </article>
              </div>
            </div>
            <aside>
              <div className="aside-header">
                <div className="aside-header-profile">
                  <div className="aside-header-profile-profile">
                    <div className="aside-header-profile-img">
                      <a
                        className="aside-header-profile-img-a"
                        href="https://www.instagram.com/kich555/"
                      >
                        <img
                          className="aside-header-profile-img-a-img"
                          src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
                          alt="profle"
                        />
                      </a>
                    </div>
                    <div className="span-box">
                      <span className="bold">
                        <a href="https://www.instagram.com/kich555/">kich555</a>
                      </span>
                      <span className="sub">Smile</span>
                    </div>
                  </div>
                  <div>
                    <a className="change-btn">전환</a>
                  </div>
                </div>
              </div>
              <div className="aside-main">
                <div className="aside-main-box1">
                  <span style={{ color: '#8e8e8e' }} className="bold">
                    회원님을 위한 추천
                  </span>
                  <a
                    href="https://www.instagram.com/explore/people/suggested/"
                    className="small-basic2"
                  >
                    모두 보기
                  </a>
                </div>
                <div className="aside-main-box2">
                  <div className="aside-header">
                    <div className="aside-header-profile">
                      <div className="aside-header-profile-profile">
                        <div className="aside-header-profile-img">
                          <a
                            className="aside-header-profile-img-b"
                            href="https://www.instagram.com/kich555/"
                          >
                            <img
                              className="aside-header-profile-img-a-img"
                              src="https://images.unsplash.com/photo-1631213717462-1cac02745998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                              alt="profle"
                            />
                          </a>
                        </div>
                        <div className="aside-header-profile-text">
                          <div className="aside-header-profile-text-name">
                            <a
                              className="bold"
                              href="https://www.instagram.com/kich555/"
                            >
                              Jonathan265
                            </a>
                          </div>
                          <div className="small-basic">
                            Did I turn off the gas stove?
                          </div>
                        </div>
                      </div>
                      <div>
                        <a className="change-btn">팔로우</a>
                      </div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <div className="aside-header-profile">
                      <div className="aside-header-profile-profile">
                        <div className="aside-header-profile-img">
                          <a
                            className="aside-header-profile-img-b"
                            href="https://www.instagram.com/kich555/"
                          >
                            <img
                              className="aside-header-profile-img-a-img"
                              src="https://images.unsplash.com/photo-1558346489-19413928158b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                              alt="profle"
                            />
                          </a>
                        </div>
                        <div className="aside-header-profile-text">
                          <div className="aside-header-profile-text-name">
                            <a
                              className="bold"
                              href="https://www.instagram.com/kich555/"
                            >
                              WineLover
                            </a>
                          </div>
                          <div className="small-basic">
                            To me, wine is a water
                          </div>
                        </div>
                      </div>
                      <div>
                        <a className="change-btn">팔로우</a>
                      </div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <div className="aside-header-profile">
                      <div className="aside-header-profile-profile">
                        <div className="aside-header-profile-img">
                          <a
                            className="aside-header-profile-img-b"
                            href="https://www.instagram.com/kich555/"
                          >
                            <img
                              className="aside-header-profile-img-a-img"
                              src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"
                              alt="profle"
                            />
                          </a>
                        </div>
                        <div className="aside-header-profile-text">
                          <div className="aside-header-profile-text-name">
                            <a
                              className="bold"
                              href="https://www.instagram.com/kich555/"
                            >
                              Nugget723
                            </a>
                          </div>
                          <div className="small-basic">Come on pet me!!</div>
                        </div>
                      </div>
                      <div>
                        <a className="change-btn">팔로우</a>
                      </div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <div className="aside-header-profile">
                      <div className="aside-header-profile-profile">
                        <div className="aside-header-profile-img">
                          <a
                            className="aside-header-profile-img-b"
                            href="https://www.instagram.com/kich555/"
                          >
                            <img
                              className="aside-header-profile-img-a-img"
                              src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                              alt="profle"
                            />
                          </a>
                        </div>
                        <div className="aside-header-profile-text">
                          <div className="aside-header-profile-text-name">
                            <a
                              className="bold"
                              href="https://www.instagram.com/kich555/"
                            >
                              Cathy_the_queen
                            </a>
                          </div>
                          <div className="small-basic">Everybody wants me</div>
                        </div>
                      </div>
                      <div>
                        <a className="change-btn">팔로우</a>
                      </div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <div className="aside-header-profile">
                      <div className="aside-header-profile-profile">
                        <div className="aside-header-profile-img">
                          <a
                            className="aside-header-profile-img-b"
                            href="https://www.instagram.com/kich555/"
                          >
                            <img
                              className="aside-header-profile-img-a-img"
                              src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
                              alt="profle"
                            />
                          </a>
                        </div>
                        <div className="aside-header-profile-text">
                          <div className="aside-header-profile-text-name">
                            <a
                              className="bold"
                              href="https://www.instagram.com/kich555/"
                            >
                              Harry_the_cat
                            </a>
                          </div>
                          <div className="small-basic">I'm hungry</div>
                        </div>
                      </div>
                      <div>
                        <a className="change-btn">팔로우</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aside-buttom">
                <ul className="aside-buttom-ul">
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      target="_blank"
                      href="https://about.instagram.com/"
                      rel="noreferrer"
                    >
                      소개·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/"
                    >
                      도움말·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://about.instagram.com/blog"
                    >
                      홍보 센터·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      target="_blank"
                      href="https://developers.facebook.com/docs/instagram"
                      rel="noreferrer"
                    >
                      API·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://about.instagram.com/about-us/careers"
                    >
                      채용 정보·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/519522125107875"
                    >
                      개인정보처리방침·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/581066165581870"
                    >
                      약관·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/explore/locations/"
                    >
                      위치·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/directory/profiles/"
                    >
                      인기 계정·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/directory/hashtags/"
                    >
                      해시태그·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a className="aside-bottom-list" href>
                      언어
                    </a>
                  </li>
                </ul>
                <span className="aside-buttom-text">
                  © 2021 Instagram from Facebook
                </span>
              </div>
            </aside>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
