import React from 'react';
import StoriesUser from './StoriesUser';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          key: 1,
          src: '/images/chanyoung/cat3.jpg',
          alt: 'cat3',
          username: 'es1208',
          time: '20분 전',
        },
        {
          key: 2,
          src: '/images/chanyoung/cat1.jpg',
          alt: 'cat1',
          username: 'hyukyc',
          time: '20시간 잔',
        },
        {
          key: 3,
          src: '/images/chanyoung/dog1.jpg',
          alt: 'dog1',
          username: 'rink_eat_drink',
          time: '3시간 전',
        },
        {
          key: 4,
          src: '/images/chanyoung/dog2.jpg',
          alt: 'dog2',
          username: '_yum_s',
          time: '16분 전',
        },
      ],
    };
  }

  render() {
    return (
      <div className="stories">
        <div className="storiesHeader">
          <span className="storiesHeaderTitle">스토리</span>
          <span className="storiesHeaderAll">모두 보기</span>
        </div>
        {this.state.users.map(userData => (
          <StoriesUser userData={userData} key={userData.key} />
        ))}
      </div>
    );
  }
}

export default React.memo(Stories);
