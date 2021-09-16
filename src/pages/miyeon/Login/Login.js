import React from 'react';
import LoginForm from './LoginForm';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#b9def7',
    }; // id와 pw의 state값 초기화
  }

  goToMain = () => {
    this.props.history.push('/Main-MiYeon');
  };

  render() {
    return (
      <section className="loginMiyeon">
        <article>
          <div className="loginBox">
            <h1 className="catstaLogo1">
              catstagram
              <img src="./images/miyeon/catFoot.png" className="catFoot" />
            </h1>
            <div>
              <LoginForm />
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Login;
