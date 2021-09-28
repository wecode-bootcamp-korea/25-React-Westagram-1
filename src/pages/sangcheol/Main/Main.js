import React from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    const { inputKeyword, commentBox } = this.state;
    return (
      <div className="sangcheol-Main">
        <Header />
        <section className="section">
          <Feed
            inputKeyword={inputKeyword}
            commentBox={commentBox}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
          <MainRight />
        </section>
      </div>
    );
  }
}

export default Main;
