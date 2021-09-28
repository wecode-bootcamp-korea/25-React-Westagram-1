import React, { Component } from 'react';

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/Data/CommentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentBox: data,
        });
      });
  }

  render() {
    return (
      <div>
        <ul className="main-icon-like-text-write_commentbox">
          {this.state.commentBox.map((el, idx) => {
            return (
              <li key={idx + 1}>
                <span className="userName">{el.userName}</span>
                <span className="main-icon-like-text-write-subtext">
                  {el.content}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
