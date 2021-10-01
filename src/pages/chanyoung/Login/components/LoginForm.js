import React from 'react';
import Id from './Id';
import Pw from './Pw';
import Button from './Button';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: {
        data: '',
        isVaild: false,
      },
      pw: {
        data: '',
        isVaild: false,
      },
    };
  }

  checkUser = e => {
    e.preventDefault();
    fetch('http://10.58.2.15:8000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id.date,
        password: this.state.pw.date,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === 'SUCCESS' && this.props.goToMain();
      });
  };

  changeIsVaild = (type, inputData) => {
    if (type === 'id') {
      inputData.includes('@')
        ? this.setState({
            [type]: { data: inputData, isVaild: true },
          })
        : this.setState({
            [type]: { data: inputData, isVaild: false },
          });
    }
    if (type === 'pw') {
      inputData.length > 5
        ? this.setState({
            [type]: { data: inputData, isVaild: true },
          })
        : this.setState({
            [type]: { data: inputData, isVaild: false },
          });
    }
  };

  render() {
    const { id, pw } = this.state;
    const isBtn = id.isVaild && pw.isVaild;

    return (
      <form className="login" onSubmit={this.checkUser}>
        <Id changeIsVaild={this.changeIsVaild} />
        <Pw changeIsVaild={this.changeIsVaild} />
        <Button isBtn={isBtn} />
      </form>
    );
  }
}

export default LoginForm;
