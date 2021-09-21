import React from 'react';
import { withRouter } from 'react-router';
import './Login.scss';
import '../../../styles/common.scss';

class Login extends React.Component {
  state = {
    id: '',
    password: '',
  };

  handleIdInput = e => {
    this.setState({
      [this.state.id]: e.target.value,
    });
    console.log(e.target.value);
  };

  handlePasswordInput = e => {
    this.setState({
      [this.state.password]: e.target.value,
    });
    console.log(e.target.value);
  };

  goToMain = () => {
    this.props.history.push('/Main-SangCheol');
  };

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
                onChange={this.handleIdInput}
              />
              <input
                type="text"
                placeholder="비밀번호"
                className="input-box_password"
                onChange={this.handlePasswordInput}
              />
              <button className="btnon off-button" onClick={this.goToMain}>
                로그인
              </button>
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

export default withRouter(Login);
