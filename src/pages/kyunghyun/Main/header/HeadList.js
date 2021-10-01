import React, { Component } from 'react';
import HeadInfo from './HeadInfo';

class HeadList extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/headerData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          headers: res.headers, //footList = 기존 배열 footer = json에서 내가 만든 데이터 배열 이름,
        });
      });
  }

  render() {
    const { headers } = this.state;
    const list = headers.map(header => (
      <HeadInfo
        header={header}
        key={header.id}
        profileId={header.profileId}
        profileImg={header.profileImg}
      />
    ));
    return <>{list}</>;
  }
}

export default HeadList;
