import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form
        className="feeds-form"
        value=""
        onSubmit={e => this.props.addCommnet(e)}
      >
        <input
          className="feeds-form__input"
          type="text"
          placeholder="댓글 달기..."
        />
        <input className="feeds-form__submit" type="submit" />
      </form>
    );
  }
}

export default CommentForm;
