import React from 'react';

import './Main.scss';
import './Main-section.scss';
import './Main-right.scss';
import './footer.scss';

class Main extends React.Component {
  // class 명은 항상 대문자로 시작.
  render() {
    // render 는 화면에 출력시키겠다는 의미
    return (
      <div className="sangcheol-Main">
        <header id="header">
          <nav className="nav-box">
            <div className="logo-box">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <span id="logo-text">Instagram</span>
              </a>
            </div>

            <div className="textbox">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" className="nav_search" />
            </div>

            <div className="btn-box">
              <a href="#">
                <i className="far fa-compass"></i>
              </a>
              <a href="#">
                <i className="far fa-heart"></i>
              </a>
              <a href="#">
                <i className="far fa-user"></i>
              </a>
            </div>
          </nav>
        </header>

        <section>
          <div className="feeds">
            <div className="user-id-box">
              <img src="./images/sangcheol/wecodeLogo.jpeg" alt="logo" />
              <div className="user-id-box-text">
                <div>Xangcheol</div>
                <div>Byron Bay </div>
              </div>
            </div>

            <div className="feed-img-section">
              <img src="./images/sangcheol/피드용 사진.jpeg" alt="img" />
            </div>

            <div className="main-icon-like-text">
              <div className="iconbox">
                <img
                  src="./images/sangcheol/heart.png"
                  alt="qwe"
                  className="iconbox_heart"
                />
                <img src="./images/sangcheol/chat.png" alt="" />
                <img src="./images/sangcheol/send.png" alt="" />
                <i className="far fa-bookmark"></i>
              </div>

              <div className="main-like-text-box">
                <div className="main-like-text-box-image">
                  <img
                    className="main-like-text-box-image-main"
                    src="./images/sangcheol/위코드 피드사진.jpeg"
                    alt="profile"
                  />
                  <span>
                    xangcheol님 <strong>외 25명</strong>이 좋아합니다.
                  </span>
                </div>
              </div>

              <div className="main-icon-like-text-write">
                <span className="main-icon-like-text-write-name">
                  wecode_bootcamp
                  <span>#프론트앤드</span>
                  <span>#개발자</span>
                  <span>#할수있다</span>
                </span>

                <div className="main-icon-like-text-write_commentbox">
                  <p className="userName">Xangcheol</p>
                  <div className="main-icon-like-text-write-subtext">
                    위코드에 들어온 순간부터 나는 개발자다 !
                  </div>
                  <img
                    className="smallHeart_img"
                    src="./images/sangcheol/heart.png"
                  />
                </div>

                <div className="main-icon-like-text-write_comment"></div>

                <div className="main-icon-like-text-write-footer">
                  {' '}
                  1시간 전
                </div>
              </div>
            </div>

            <div className="main_comment">
              <input
                className="main_comment_text"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="main_comment_submit">게시</button>
            </div>
          </div>

          <div className="main-right">
            <div className="main-right-userinfo">
              <img
                className="main-right-userinfo_img"
                src="./images/sangcheol/wecodeLogo.jpeg"
                alt="logo"
              />
              <div className="main-right-userinfo-box">
                <div>Xangcheol</div>
                <div>
                  WeCode<span className="wecode_text">위코드</span>{' '}
                </div>
              </div>
            </div>

            <div className="main_right_story">
              <div className="main_right_story_text">
                <span className="main_right_story_text_story">스토리</span>
                <span className="main_right_story_text_storytwo">
                  모두 보기
                </span>
              </div>

              <div className="main_right_story_contents">
                <img src="./images/sangcheol/프사용.JPG" alt="u" />
                <div className="main_right_story_contents_texts">
                  <p>xangcheol</p>
                  <p className="main_right_story_contents_subtexts">3시간 전</p>
                </div>
              </div>

              <div className="main_right_story_contents">
                <img src="./images/sangcheol/프사용.JPG" alt="y" />
                <div className="main_right_story_contents_texts">
                  <p>wecode_front</p>
                  <p className="main_right_story_contents_subtexts">1시간 전</p>
                </div>
              </div>

              <div className="main_right_story_contents">
                <img src="./images/sangcheol/프사용.JPG" alt="t" />
                <div className="main_right_story_contents_texts">
                  <p>wecode_database</p>
                  <p className="main_right_story_contents_subtexts">3분 전</p>
                </div>
              </div>

              <div className="main_right_story_contents">
                <img src="./images/sangcheol/프사용.JPG" alt="#" />
                <div className="main_right_story_contents_texts">
                  <p>ianIanlee</p>
                  <p className="main_right_story_contents_subtexts">34분 전</p>
                </div>
              </div>
            </div>

            <div className="for_user_recommand">
              <div className="for_user_recommand_textbox">
                <span className="for_user_recommand_textbox_textone">
                  회원님을 위한 추천
                </span>
                <span className="for_user_recommand_textbox_texttwo">
                  모두 보기
                </span>
              </div>

              <div className="for_user_recommand_contents">
                <div className="for_user_recommand_contents_box">
                  <img src="./images/sangcheol/프사용.JPG" alt="e" />
                  <div className="for_user_recommand_contents_texts">
                    <p>GodOfFeCheol</p>
                    <p className="for_user_recommand_contents_subtexts">
                      회원님을 팔로우 합니다.
                    </p>
                  </div>
                </div>
                <a href="#" className="for_user_recommand_contents_follow_btn">
                  <div>팔로우</div>
                </a>
              </div>

              <div className="for_user_recommand_contents">
                <div className="for_user_recommand_contents_box">
                  <img src="./images/sangcheol/프사용.JPG" alt="w" />
                  <div className="for_user_recommand_contents_texts">
                    <p>smileBoyIan</p>
                    <p className="for_user_recommand_contents_subtexts">
                      함께 아는 친구가 80명 입니다.
                    </p>
                  </div>
                </div>
                <a href="#" className="for_user_recommand_contents_follow_btn">
                  <div>팔로우</div>
                </a>
              </div>

              <div className="for_user_recommand_contents">
                <div className="for_user_recommand_contents_box">
                  <img src="./images/sangcheol/프사용.JPG" alt="q" />
                  <div className="for_user_recommand_contents_texts">
                    <p>iCanDoIt</p>
                    <p className="for_user_recommand_contents_subtexts">
                      회원님을 팔로우 합니다.
                    </p>
                  </div>
                </div>
                <a href="#" className="for_user_recommand_contents_follow_btn">
                  <div>팔로우</div>
                </a>
              </div>
            </div>

            <footer>
              <div className="footer_box">
                <p>instagram 정보</p>
                <p>지원</p>
                <p>홍보 센터</p>
                <p>API</p>
                <p>채용정보</p>
              </div>

              <div className="footer_box_two">
                <p>개인정보 처리방침</p>
                <p>약관</p>
                <p>디렉터리</p>
                <p>프로필</p>
                <p>해시태그</p>
                <p>언어</p>
              </div>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
