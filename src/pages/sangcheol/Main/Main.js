import React from 'react';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Aside from './Components/Aside';
import './Main.scss';
import './Main-section.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/Data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;

    return (
      <div className="sangcheol-Main">
        <Header />
        <section className="section">
          <div>
            {feedList.map(el => {
              return (
                <Feed
                  key={el.id}
                  userId={el.userId}
                  userLocation={el.userLocation}
                  userImage={el.userImage}
                  userLikedImage={el.userLikedImage}
                  userLikedAccount={el.userLikedAccount}
                  howManyLiked={el.howManyLiked}
                  feedText={el.feedText}
                  content={el.content}
                />
              );
            })}
          </div>
          <Aside />
        </section>
      </div>
    );
  }
}

export default Main;
