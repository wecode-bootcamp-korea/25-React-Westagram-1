import React from 'react';

class Pw extends React.Component {
  checkVaild = ({ target: { value } }) => {
    value.length >= 5
      ? this.props.changeIsVaild('pw', value, true)
      : this.props.changeIsVaild('pw', value, false);
  };

  render() {
    return (
      <input
        className="pw"
        type="password"
        placeholder="비밀번호"
        onChange={this.checkVaild}
      />
    );
  }
}

export default Pw;
