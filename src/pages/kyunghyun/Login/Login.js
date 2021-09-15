import React from 'react';
import { Link } from 'react-router-dom';
// import './Login.css'
import './Login.scss';
import '../../../styles/common.scss';
class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <div className="KyungHyunLogin">
        <header>
          <h1>
            <b>instagram</b>
          </h1>
          <div className="main-function">
            <form className="login-form" method="POST">
              <input
                className="id"
                onkeyup="loginValidation()"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="id"
                onkeyup="loginValidation()"
                type="password"
                placeholder="비밀번호"
              />
              <button
                type="button"
                onClick={this.goToMain}
                className="login"
                disabled
              >
                <div>로그인</div>
              </button>
              <div className="else">
                <div className="line" />
                <div className="text-else">또는</div>
                <div className="line" />
              </div>
              <div className="login-box">
                <a className="fb-login" href="https://bit.ly/3A8zOJw">
                  <span className="fb-login-icon" />
                  <span className="fb-login-text">Facebook으로 로그인</span>
                </a>
              </div>
            </form>
            <a className="forgot-pw" href="https://bit.ly/3k5tzjV" tabIndex={0}>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </header>
        <div className="sign-in">
          <p className="ask-have-account">
            계정이 없으신가요?
            <a className="underline" href="https://bit.ly/3lAcNt1">
              <span>가입하기</span>
            </a>
          </p>
        </div>
        <div className="download-app">
          <p className="download-app-text">앱을 다운로드하세요.</p>
          <div className="download-link-box">
            <a className="apple-download-link" href="https://apple.co/3C9n1XB">
              <img
                className="download-img"
                src="https://bit.ly/3htHluZ"
                alt="App Store"
              />
            </a>
            <a href="https://bit.ly/38ZWLlZ">
              <img
                className="download-img"
                src="https://bit.ly/3nzQvtE"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
