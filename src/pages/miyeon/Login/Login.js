import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-MiYeon');
  };

  render() {
    return (
      <section class="loginMiyeon">
        <article>
          <div className="loginBox">
            <h1 className="catstaLogo1">
              catstagram
              <img src="./images/miyeon/catFoot.png" class="catFoot" />
            </h1>
            <div>
              <form className="loginForm">
                <input
                  type="text"
                  id="idInput"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input type="password" id="pwInput" placeholder="비밀번호" />
              </form>
              <button className="loginGo" onClick={this.goToMain}>
                로그인
              </button>
              <a onClick={this.goToMain} className="pwForgot">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default withRouter(Login);
