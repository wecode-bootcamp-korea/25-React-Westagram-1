import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={e => this.props.addCommnet(e)}>
        <input className="input" placeholder="댓글 달기..." />
        <input className="submit" type="submit" />
      </form>
    );
  }
}

export default CommentForm;
