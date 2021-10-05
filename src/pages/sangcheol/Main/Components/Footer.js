import React, { Component } from 'react';
import '../../../sangcheol/Main/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer_box">
            <p>instagram 정보</p>
            <p>지원</p>
            <p>홍보 센터</p>
            <p>API</p>
            <p>채용정보</p>
          </div>

          <div className="footer_box_two">
            <p>개인정보 처리방침</p>
            <p>약관</p>
            <p>디렉터리</p>
            <p>프로필</p>
            <p>해시태그</p>
            <p>언어</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
