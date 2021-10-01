import React from 'react';

class Pw extends React.Component {
  render() {
    return (
      <input
        className="pw"
        type="password"
        placeholder="비밀번호"
        onChange={({ target }) => {
          this.props.changeIsVaild('pw', target.value);
        }}
      />
    );
  }
}

export default Pw;
