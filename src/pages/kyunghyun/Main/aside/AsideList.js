import React, { Component } from 'react';
import AsideInfo from './AsideInfo';

class AsideList extends Component {
  constructor() {
    super();
    this.state = {
      asides: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/asideData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          asides: res.asides, //footList = 기존 배열 footer = json에서 내가 만든 데이터 배열 이름,
        });
      });
  }

  render() {
    const { asides } = this.state;
    const list = asides.map(aside => (
      <AsideInfo
        aside={aside}
        key={aside.id}
        profileId={aside.profileId}
        profileComment={aside.profileComment}
        profileImg={aside.profileImg}
      />
    ));
    return <>{list}</>;
  }
}

export default AsideList;
