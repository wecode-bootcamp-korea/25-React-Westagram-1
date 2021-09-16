import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
    }; // id와 pw의 state값 초기화
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
    // alert(e.target.value);
    console.log(e.target.value);
  }; // id값 state에 저장

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
    console.log(e.target.value);
  }; // pw값 state에 저장

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
              <input
                type="text"
                id="idInput"
                name="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                id="pwInput"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
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
