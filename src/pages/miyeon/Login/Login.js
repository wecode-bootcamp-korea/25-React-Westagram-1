import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
      buttonColor: false,
    };
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  buttonColorChange = () => {
    const { idVal, pwVal } = this.state;
    idVal.includes('@') && pwVal.length >= 5
      ? this.setState({ buttonColor: true })
      : this.setState({ buttonColor: false });
  };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.4.36:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idVal,
        password: this.state.pwVal,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.props.history.push('/Main-MiYeon');
        } else {
          alert('계정 정보를 다시 확인하여 다시 로그인해 주세요.');
        }
      });
    // 프론트와 백엔드 통신 이전 로그인 유효성 검사
    // const { idVal, pwVal } = this.state;
    // idVal === 'buzzi_nyang@happy' && pwVal === '123456'
    //   ? this.props.history.push('/Main-MiYeon')
    //   : e.preventDefault();
    // alert('캣스타그램 계정 주인만 로그인할 수 있습니다');
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
                <Link to="#" className="pwForgot">
                  비밀번호를 잊으셨나요?
                </Link>
                {/* 이동할 경로가 없어 경로 미지정 */}
              </form>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default withRouter(Login);
