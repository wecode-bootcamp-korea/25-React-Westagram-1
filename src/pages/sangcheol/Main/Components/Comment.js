import React from 'react';

class Comment extends React.Component {
  render() {
    const { handleInput, handleSubmit, inputKeyword } = this.props;

    return (
      <div>
        <form className="main_comment" onSubmit={handleSubmit}>
          <input
            className="main_comment_text"
            type="text"
            placeholder="댓글 달기..."
            onChange={handleInput}
            value={inputKeyword}
          />
          <button className="main_comment_submit">게시</button>
        </form>
      </div>
    );
  }
}

export default Comment;
