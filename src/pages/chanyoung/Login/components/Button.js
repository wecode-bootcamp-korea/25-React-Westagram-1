import React from 'react';

class Button extends React.Component {
  changeClassName = () => {
    const { isBtn } = this.props;
    return isBtn ? 'button' : 'buttonDisabled';
  };

  render() {
    return (
      <button className={this.changeClassName()} type="submit">
        로그인
      </button>
    );
  }
}

export default Button;
