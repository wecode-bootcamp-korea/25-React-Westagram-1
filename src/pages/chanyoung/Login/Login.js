import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-ChanYoung');
  };

  render() {
    return (
      <div className="ChanYoungLogin">
        <div className="main-wrapper">
          <header>westagram</header>
          <main>
            <form className="login">
              <input
                className="login__id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
                pattern="\d{2,3}-\d{3,4}-\d{4}|(.*)@.*(\.com|\.net)"
              />
              <input
                className="login__password"
                type="password"
                placeholder="비밀번호"
                required
                pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+=/.,<>?])([a-zA-Z\d!@#$%^&*()_+=/.,<>?]){8,16}"
              />
              <button className="login__button" onClick={this.goToMain}>
                로그인
              </button>
            </form>
            <section className="find-password">비밀번호를 잊으셨나요?</section>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
