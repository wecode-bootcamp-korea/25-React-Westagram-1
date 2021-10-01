import React from 'react';
import Header from './Components/Header';
import Feed from './Components/Feed';
import MainRight from './Components/MainRight';
import './Main.scss';
import './Main-section.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      inputKeyword: '',
      commentBox: [],
    };
  }

  handleInput = e => {
    console.log(e.target.name);
    this.setState({
      inputKeyword: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputKeyword.length === 0) return;

    this.setState({
      commentBox: this.state.commentBox.concat(this.state.inputKeyword),
      inputKeyword: '',
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/Data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentBox: data,
        });
      });
  }

  render() {
    const { inputKeyword, commentBox } = this.state;

    return (
      <div className="sangcheol-Main">
        <Header />
        <section className="section">
          <div>
            {this.state.commentBox.map(el => {
              return (
                <Feed
                  inputKeyword={inputKeyword}
                  commentBox={commentBox}
                  handleInput={this.handleInput}
                  handleSubmit={this.handleSubmit}
                  id={el.id}
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
          <MainRight />
        </section>
      </div>
    );
  }
}

export default Main;
