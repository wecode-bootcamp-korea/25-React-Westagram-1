import React from 'react';
import './Login.scss';
import '../../../styles/common.scss';

class Login extends React.Component {
  render() {
    return (
      <div className=" sangcheol-Login">
        <section id="section">
          <div id="inner">
            <h1 id="logo-text">Westagram</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="input-box_login"
              />
              <input
                type="text"
                placeholder="비밀번호"
                className="input-box_password"
              />
              <button className="btnon off-button">로그인</button>
              <a id="footer_link" href="Null">
                비밀번호를 잊으셨나요 ?
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
