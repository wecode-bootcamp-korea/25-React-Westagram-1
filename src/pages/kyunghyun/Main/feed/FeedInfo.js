import React, { Component } from 'react';
import CommentForm from '../comment/CommentForm';
import CommentList from '../comment/CommentList';
import './feed.scss';

class FeedInfo extends Component {
  id = 3;

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          information: res.C1,
        });
      });
  } // json파일 패치하기

  state = {
    information: [], // 댓글 데이터가 들어갈 배열
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++,
        }) // 비어있는 객체{}에 data를 집어넣고,   id: this.id++,도 집어넣기 or ...data, id:  this.id++; 해도 됨 = 불변성 유지
      ),
    });
  }; // 댓글 데이터 생성하는 함수 : data (CommentForm의 state.comment) 를 파라미터로 받아 concat/Object.assign으로 생성한 새로운 information배열을 가지고, setState로 State변경

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
      // info.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // 선택한 'id'를 제외한 나머지 id들로 새로운 배열을 만들어서 표시함
      // info.id 가 id 인 것을 제거함
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  }; // 배열 수정하는 함수 : id 와 data(를 파라미터로 받아 id가 매치되는 배열의 data를 map함수를 사용해 새로운 data로 변환시킴
  render() {
    const { id, mainImg, profileImg } = this.props.feed;
    const { information } = this.state;
    return (
      <>
        <article key={id}>
          <header className="article-header">
            <div className="article-div">
              <div className="article-header-profile">
                <a
                  className="article-header-profile-link"
                  href="https://www.instagram.com/kich555/"
                >
                  <img
                    className="article-header-profile-img"
                    src={profileImg}
                    alt=""
                  />
                </a>
              </div>
              <div className="span-box">
                <span>
                  <a className="bold" href="https://www.instagram.com/kich555/">
                    kich555
                  </a>
                </span>
                <span>
                  <a className="sub" href="https://www.instagram.com/kich555/">
                    Wecode-위코드
                  </a>
                </span>
              </div>
            </div>
            <div className="article-header-button-box">
              <a className="article-header-button">...</a>
            </div>
          </header>
          <div className="article-img">
            <img className="article-img" src={mainImg} />
          </div>
          <div className="article-text">
            <section className="article-text-icon">
              <div className="right-icon">
                <div className="icono-heart span" />
                <div className="icono-disqus span" />
                <div className="icono-locationArrow span" />
              </div>
              <div className="icono-bookmarkEmpty span" />
            </section>
            <section className="article-text1">
              <a href="https://www.instagram.com/kich555/">
                <img
                  className="article-text1-img"
                  src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  alt=""
                />
              </a>
              <span className="bold">nyangnya29</span>
              <span className="basic">님 </span>
              <span className="bold">외 284명</span>
              <span className="basic">이 좋아합니다</span>
            </section>
            <div className="article-text2">
              <span className="bold">kich555</span>
              <span className="basic">하늘은 영어로 sky...</span>
              <a className="view-more">더 보기</a>
            </div>
            <div className="article-text3">
              <CommentList
                data={information}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}
              />
            </div>
            <div className="posted-time">
              <span className="time">12시간 전</span>
            </div>
            <section className="comment">
              <div className="comment-box">
                <CommentForm onCreate={this.handleCreate} />
              </div>
            </section>
          </div>
        </article>
      </>
    );
  }
}

export default FeedInfo;
