import React from 'react';
import Login from './Login';

class loginValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      alert: '',
    };
  }

  loginValidation = () => {
    const { idValue, pwValue } = this.state;
    const validId = idValue.includes('@');
    const validPw = pwValue.length >= 6;

    if (validId && validPw) {
      this.props.history.push('/Main-KyungHyun');
    }

    if (!validId || !validPw) {
      this.state.idValue = '';
      this.state.pwValue = '';
      this.state.alert =
        '입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.';
    }
  };
}

export default loginValidation;
