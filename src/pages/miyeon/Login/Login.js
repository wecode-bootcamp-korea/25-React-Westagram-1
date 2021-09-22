import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
      buttonColor: false,
    }; // id와 pw의 state값 초기화
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
  }; // id값 state에 저장

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  }; // pw값 state에 저장

  buttonColorChange = () => {
    const { idVal, pwVal } = this.state;
    idVal.includes('@') && pwVal.length >= 5
      ? this.setState({ buttonColor: true })
      : this.setState({ buttonColor: false });
  };

  goToMain = () => {
    const { idVal, pwVal } = this.state;
    idVal === 'buzzi_nyang@happy' && pwVal === '123456'
      ? this.props.history.push('/Main-MiYeon')
      : alert('캣스타그램 계정 주인만 로그인할 수 있습니다');
  };

  render() {
    return (
      <section className="loginMiyeon">
        <article>
          <div className="loginBox">
            <h1 className="catstaLogo1">
              catstagram
              <img
                src="./images/miyeon/catFoot.png"
                className="catFoot"
                alt="catFoot2"
              />
            </h1>
            <div>
              <form onChange={this.buttonColorChange} onSubmit={this.goToMain}>
                <input
                  type="text"
                  id="idInput"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.handleIdInput}
                />
                <input
                  type="password"
                  id="pwInput"
                  placeholder="비밀번호"
                  onChange={this.handlePwInput}
                />
                <button
                  className={this.state.buttonColor ? 'loginOn' : 'loginOff'}
                >
                  로그인
                </button>
                <a onClick={this.goToMain} className="pwForgot">
                  비밀번호를 잊으셨나요?
                </a>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default withRouter(Login);
