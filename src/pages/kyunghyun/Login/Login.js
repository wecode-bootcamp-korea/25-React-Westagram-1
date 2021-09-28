import React from 'react';
// import { Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      valid: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }; // id/pw 통합 input핸들러 : state객체 속성을 이용 []:value 방식으로 적용되는 input을 나눔

  checkValid = e => {
    const { id, pw } = this.state;
    const validId = id.includes('@');
    const validPw = pw.length >= 6;
    validId && validPw
      ? this.setState({ valid: true })
      : this.setState({ valid: false });
  };
  // id input의 @와 pw input이 길이가 6 이상의 문자열을 받는 유효성 확인
  // valid가 true일 시 className이 변경되어 버튼 색 변경

  loginValidation = () => {
    const { valid, pw, id, alert } = this.state;
    const { history } = this.props;

    valid ? history.push('/Main-KyungHyun') : (id = '');
    pw = '';
    alert =
      '입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.';
  };
  //// loginValidation은 유효성 검사 함수 -> 추후 스케줄에 적용 예정

  // enterValidation = e => {
  //   const { history } = this.props;
  //   if (e.key === 'Enter' && this.state.valid) {
  //     history.push('/Main-KyungHyun');
  //   }
  // };

  handleSubmit = e => {
    const { history } = this.props;
    const { valid } = this.state;
    e.preventDefault();
    if (valid) {
      history.push('/Main-KyungHyun');
    }
  };
  //submit이 일어날 시  history.push('/Main-KyungHyun'); 실행

  render() {
    const { id, pw, valid } = this.state;
    return (
      <div className="KyungHyunLogin">
        <header>
          <h1>
            <b>instagram</b>
          </h1>
          <div className="main-function">
            <form
              className="login-form"
              method="POST"
              onSubmit={this.handleSubmit}
            >
              <input
                className="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                onChange={this.handleInput}
                onKeyUp={this.checkValid}
                // onKeyDown={this.enterValidation}
                value={id}
                name="id"
              />

              <input
                className="pw"
                placeholder="비밀번호"
                type="password"
                onChange={this.handleInput}
                onKeyUp={this.checkValid}
                // onKeyDown={this.enterValidation}
                value={pw}
                name="pw"
              />
              <button
                className={valid ? 'valid' : 'login'}
                type="submit"
                // onClick={this.loginValidation}
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
            <p>{this.state.alert}</p>
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
