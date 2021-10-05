import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Aside extends Component {
  render() {
    return (
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
            <span className="main_right_story_text_storytwo">모두 보기</span>
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
            <Link to="#" className="for_user_recommand_contents_follow_btn">
              <div>팔로우</div>
            </Link>
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
            <Link to="#" className="for_user_recommand_contents_follow_btn">
              <div>팔로우</div>
            </Link>
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
            <Link to="#" className="for_user_recommand_contents_follow_btn">
              <div>팔로우</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Aside;
