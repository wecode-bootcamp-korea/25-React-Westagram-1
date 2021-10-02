import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecommendUser extends Component {
  render() {
    const { recommendUser } = this.props;
    return (
      <div className="user">
        <img src={recommendUser.profileImg} alt={recommendUser.imgAlt} />
        <div className="userID">
          <Link to="#" className="whatID">
            <b>{recommendUser.user_id}</b>
          </Link>
          <p className="beforeUpload">{recommendUser.uploadTime}시간 전</p>
        </div>
      </div>
    );
  }
}

export default RecommendUser;
