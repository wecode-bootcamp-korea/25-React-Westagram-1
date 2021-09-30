import React from 'react';

class Id extends React.Component {
  checkVaild = ({ target: { value } }) => {
    value.includes('@')
      ? this.props.changeIsVaild('id', value, true)
      : this.props.changeIsVaild('id', value, false);
  };

  render() {
    return (
      <input
        className="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={this.checkVaild}
      />
    );
  }
}

export default Id;
