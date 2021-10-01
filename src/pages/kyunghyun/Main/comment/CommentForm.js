import React, { Component } from 'react';

class CommentForm extends Component {
  state = {
    comment: '',
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value,
    });
  }; // input값이 변화할때마다 변화한 값을 comment에 넣고, setState로 comment의 state를 변환시킴

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      comment: '',
    });
  }; // input값을 submit하는 함수 : onCreate(handleCreate) 함수를 props로 받아 this.state=(comment)에 있는 데이터를 onCreate(handleCreate)의 파라미터로 보내 새로운 information 배열을 생성하고, setState를 사용하여 comment의 state를 ''로 바꿈

  render() {
    const { comment } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="comment-box-form">
          <div className="comment-box-form-box">
            <div className="article-header-profile">
              <a
                className="article-header-profile-link"
                href="https://www.instagram.com/kich555/"
              >
                <img
                  className="article-header-profile-img"
                  src="https://bit.ly/3AyTdmS"
                  alt="profile"
                />
              </a>
            </div>
            <input
              id="textarea"
              placeholder="댓글 달기..."
              onChange={this.handleChange}
              value={comment}
            />
          </div>
          <button className="text-up-btn" type="submit">
            게시
          </button>
        </form>
      </>
    );
  }
}

export default CommentForm;
