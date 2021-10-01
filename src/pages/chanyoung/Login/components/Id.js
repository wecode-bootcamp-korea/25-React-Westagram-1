import React from 'react';

class Id extends React.Component {
  render() {
    return (
      <input
        className="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={({ target }) => {
          this.props.changeIsVaild('id', target.value);
        }}
      />
    );
  }
}

export default Id;
