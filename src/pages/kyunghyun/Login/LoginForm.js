import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    id: '',
    pw: '',
    isValid: false,
  };

  handleChange = e => {
    this.setState({
      [e.target.value]: e.target.value,
    });
  };

  checkValid = e => {
    const { id, pw } = this.state;
    const validId = id.includes('@');
    const validPw = pw.length >= 6;
    validId && validPw
      ? this.setState({ isValid: true })
      : this.setState({ isValid: false });
  };

  loginValidation = () => {
    this.state.isValid
      ? this.props.history.push('/Main-KyungHyun')
      : (this.state.id = ''); // 여기서부턴 유효성 검사 추후 추가 예정
    this.state.pw = '';
    this.state.alert =
      '입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.';
  };
  enterValidation = e => {
    if (e.key === 'Enter' && this.state.isValid) {
      this.props.history.push('/Main-KyungHyun');
    }
  };

  render() {
    const { id, pw } = this.state;
    return (
      <>
        <input
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
          onChange={this.handleChange}
          onKeyUp={this.checkValid}
          onKeyDown={this.enterValidation}
          value={id}
          name="id"
        />

        <input
          className="pw"
          placeholder="비밀번호"
          type="password"
          onChange={this.handleChange}
          onKeyUp={this.checkValid}
          onKeyDown={this.enterValidation}
          value={pw}
          name="pw"
        />
        <button
          className={this.state.isValid ? 'valid' : 'login'}
          type="button"
          onClick={this.loginValidation}
        >
          <div>로그인</div>
        </button>
      </>
    );
  }
}

export default LoginForm;
