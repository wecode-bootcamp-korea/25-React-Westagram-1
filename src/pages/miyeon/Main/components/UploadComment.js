import { Component } from 'react';

export default class UploadComment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <>
        <li key={comment.id}>
          <b>{comment.name}</b>&nbsp;
          {comment.content}
        </li>
      </>
    );
  }
}
