import React from 'react';

class Comment extends React.Component {
  render() {
    const { id, handleInput, handleSubmit, inputKeyword } = this.props;
    return (
      <div>
        <form className="main_comment" key={key}>
          <input
            className="main_comment_text"
            placeholder="댓글 달기..."
            name={id}
            onChange={handleInput}
            value={inputKeyword}
          />
          <button className="main_comment_submit" onClick={handleSubmit}>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comment;
