import React, { Component } from 'react';

class FootInfo extends Component {
  render() {
    const { foot, href } = this.props.footer;
    return (
      <li>
        <a className="aside-bottom-list" href={href}>
          {foot}
        </a>
      </li>
    );
  }
}

export default FootInfo;
