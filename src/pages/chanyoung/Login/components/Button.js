import React from 'react';

class Button extends React.Component {
  changeClassName = () => (this.props.isBtn ? 'button' : 'buttonDisabled');

  render() {
    return (
      <button className={this.changeClassName()} type="submit">
        로그인
      </button>
    );
  }
}

export default Button;
