import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <nav className="nav-box">
            <div className="logo-box">
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <span id="logo-text">Instagram</span>
              </Link>
            </div>

            <div className="textbox">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" className="nav_search" />
            </div>

            <div className="btn-box">
              <Link to="#">
                <i className="far fa-compass"></i>
              </Link>
              <Link to="#">
                <i className="far fa-heart"></i>
              </Link>
              <Link to="#">
                <i className="far fa-user"></i>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
