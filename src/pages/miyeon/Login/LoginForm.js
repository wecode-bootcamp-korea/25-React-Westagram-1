import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
      color: '#b9def7',
    }; // id와 pw의 state값 초기화
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
    return this.setState.idVal;
  }; // id값 state에 저장

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
    return this.setState.pwVal;
  }; // pw값 state에 저장

  // goToMain = () => {
  //   handleIdInput
  //     ? this.props.history.push('/Main-MiYeon')
  //     : this.props.history.push('/Main-MiYeon');
  // };

  render() {
    return (
      <>
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
        <button
          className="loginGo"
          style={{ backgroundColor: this.state.color }}
          onChange={this.goToMain}
        >
          로그인
        </button>
        <a onClick={this.goToMain} className="pwForgot">
          비밀번호를 잊으셨나요?
        </a>
      </>
    );
  }
}

export default withRouter(LoginForm);
