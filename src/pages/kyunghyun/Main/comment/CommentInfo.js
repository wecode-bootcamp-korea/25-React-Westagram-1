import React, { Component, Fragment } from 'react';

class CommentInfo extends Component {
  state = {
    comment: '',
    editing: false,
  }; // 수정을 위한 state값

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }; // 댓글을 삭제하는 함수 main의 handleRemove를 props로 받아옴(onRemove)

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        comment: this.state.comment,
      }); // 만약에 editing값이 true이면 특정 id를 가진 info의 comment를 현재 state의 comment로 변경
    } else {
      this.setState({
        comment: info.comment,
      });
    }
    this.setState({
      editing: !this.state.editing,
    }); // 위 함수들이 실행된 이 후 editing 값을 현재 state editing값의 반대값으로 설정(true이면 False로/ false이면 true로)
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value,
    });
  }; // 수정 버튼을 클릭할 시 나타나는 input창의 값을 comment로 받아옴

  render() {
    const { comment } = this.props.info;
    const { editing } = this.state;
    return (
      <div className="article-comment">
        {editing ? (
          <input
            className="comment-update"
            name="comment"
            placeholder="내용을 수정해 주세요"
            onChange={this.handleChange}
            value={this.state.comment}
          /> //editing 값이 true이면 input창 생성
        ) : (
          <span>{comment}</span> // false이면 정상적으로 댓글 출력
        )}
        <div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      </div>
    );
  }
}

export default CommentInfo;
