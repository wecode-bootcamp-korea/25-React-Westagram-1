import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';

class Login extends React.Component {
  goToMain = (isBtn, e) => {
    e.preventDefault();
    if (isBtn) this.props.history.push('/Main-ChanYoung');
  };

  render() {
    return (
      <div className="ChanYoungLogin">
        <div className="main-wrapper">
          <header>westagram</header>
          <main>
            <LoginForm goToMain={this.goToMain} />
            <section className="find-password">비밀번호를 잊으셨나요?</section>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
