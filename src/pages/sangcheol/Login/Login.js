import React from 'react';
import { withRouter } from 'react-router';
import './Login.scss';
import '../../../styles/common.scss';

class Login extends React.Component {
  state = {
    id: '',
    password: '',
    offButton: false,
  };

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
    console.log(e.target.value);
  };

  handlePasswordInput = e => {
    this.setState({
      password: e.target.value,
    });
    console.log(e.target.value);
  };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.5.199:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
        // name: '이상철',
        // phone: '010-0000-0000',
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.props.history.push('/Main-SangCheol');
        }
      });

    // const { id, password } = this.state;
    // id === 'zlrz002@naver.com' && password === 'tkdas6708@'
    //   ? this.props.history.push('/Main-SangCheol')
    //   : alert('아이디와 비밀번호를 확인해주세요');
  };

  handleInputText = e => {
    const { id, password } = this.state;
    id.includes('@') && password.length >= 5
      ? this.setState({
          offButton: true,
        })
      : this.setState({
          offButton: false,
        });
  };

  render() {
    return (
      <div className=" sangcheol-Login">
        <section id="section">
          <div id="inner">
            <h1 id="logo-text">Westagram</h1>
            <form onChange={this.handleInputText} className="input-box">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="input-box_login"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="input-box_password"
                onChange={this.handlePasswordInput}
              />
              <button
                className={this.state.offButton ? 'btnon' : 'offButton'}
                onClick={this.goToMain}
              >
                로그인
              </button>
              <a id="footer_link" href="Null">
                비밀번호를 잊으셨나요 ?
              </a>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
