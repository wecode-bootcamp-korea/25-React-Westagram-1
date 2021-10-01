import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.addCommnet}>
        <input className="input" placeholder="댓글 달기..." />
        <input className="submit" type="submit" />
      </form>
    );
  }
}

export default CommentForm;
