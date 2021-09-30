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

  changeIsVaild = (type, data, isVaild) =>
    this.setState({
      [type]: { data: data, isVaild: isVaild },
    });

  render() {
    const { id, pw } = this.state;
    const isBtn = id.isVaild && pw.isVaild;

    return (
      <form
        className="login"
        onSubmit={e => {
          this.props.goToMain(id.data, pw.data, isBtn, e);
        }}
      >
        <Id changeIsVaild={this.changeIsVaild} />
        <Pw changeIsVaild={this.changeIsVaild} />
        <Button isBtn={isBtn} />
      </form>
    );
  }
}

export default LoginForm;
