import React from 'react';

class Pw extends React.Component {
  checkVaild = e => {
    e.target.value.length >= 5
      ? this.props.changeIsVaild('pw', true)
      : this.props.changeIsVaild('pw', false);
  };

  render() {
    return (
      <input
        className="login__password"
        type="password"
        placeholder="비밀번호"
        onChange={this.checkVaild}
      />
    );
  }
}

export default Pw;
