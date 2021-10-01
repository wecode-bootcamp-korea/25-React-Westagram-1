import React, { Component } from 'react';
import FootInfo from './FootInfo';

class FootList extends Component {
  constructor() {
    super();
    this.state = {
      footList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/footer.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          footList: res.footers, //footList = 기존 배열 footer = json에서 내가 만든 데이터 배열 이름,
        });
      });
  }

  render() {
    const { footList } = this.state;
    const list = footList.map(footer => (
      <FootInfo footer={footer} href={footer.href} />
    ));
    return (
      <div className="aside-buttom">
        <ul className="aside-buttom-ul">{list}</ul>
        <span className="aside-buttom-text">
          © 2021 Instagram from Facebook
        </span>
      </div>
    );
  }
}

export default FootList;
