import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentBox: [],
    };
  }

  componentDidMount() {
    this.setState({
      commentBox: this.props.content,
    });
  }

  render() {
    console.log(this.state.commentBox);
    return (
      <div></div>
      // <ul className="main-icon-like-text-write_commentbox">
      //   {this.state.commentBox.map((el, idx) => {
      //     return (
      //       <li key={idx + 1}>
      //         <span className="userName">{el.userId}</span>
      //         <span className="main-icon-like-text-write-subtext">
      //           {el.content}
      //         </span>
      //       </li>
      //     );
      //   })}
      // </ul>
    );
  }
}

export default CommentList;
