import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import './Login.scss';

class Login extends React.Component {
  goToMain = (id, pw, e) => {
    e.preventDefault();
    fetch('http://10.58.2.15:8000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === 'SUCCESS' &&
          this.props.history.push('/Main-ChanYoung');
      });
  };

  render() {
    return (
      <div className="chanyoungLogin">
        <div className="mainWrapper">
          <header>westagram</header>
          <main>
            <LoginForm goToMain={this.goToMain} />
            <section className="findPassword">비밀번호를 잊으셨나요?</section>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
