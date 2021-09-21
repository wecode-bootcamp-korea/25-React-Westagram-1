import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className="feeds-form" onSubmit={e => this.props.addCommnet(e)}>
        <input
          className="feeds-form__input"
          type="text"
          placeholder="댓글 달기..."
        />
        <input className="feeds-form__submit" value="게시" type="submit" />
      </form>
    );
  }
}

export default CommentForm;
