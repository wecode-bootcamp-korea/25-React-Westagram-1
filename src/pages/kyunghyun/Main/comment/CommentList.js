import React from 'react';
import CommentInfo from './CommentInfo';

class CommentList extends React.Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data } = this.props;

    const list = data.map(info => <CommentInfo info={info} key={info.id} />);
    return <div>{list}</div>;
  }
}

export default CommentList;
