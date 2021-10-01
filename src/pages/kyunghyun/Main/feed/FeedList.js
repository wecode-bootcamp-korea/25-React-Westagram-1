import React, { Component } from 'react';
import FeedInfo from './FeedInfo';

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  // static defaultProps = {
  //   data: [],
  // }; // data의 default값을 잡음

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          feeds: res.DI,
        });
      });
  }

  render() {
    const { feeds } = this.state;
    const feedList = feeds.map(feed => (
      <FeedInfo
        feed={feed}
        key={feed.id}
        mainImg={feed.mainImg}
        profileImg={feed.profileImg}
      />
    ));
    return <>{feedList}</>;
  }
}

export default FeedList;
