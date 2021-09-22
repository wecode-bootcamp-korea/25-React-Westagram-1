import { Component } from 'react';

class Addcomment extends Component {
  render() {
    const { commentInfo } = this.props;
    return (
      <>
        <li className="comment">
          {/* <b>{commentInfo.name}</b>&nbsp; */}
          {commentInfo}
        </li>
      </>
    );
  }
}

export default Addcomment;
