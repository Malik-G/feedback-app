import React, { Component } from 'react';
import axios from 'axios';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1 className="App-title">Feedback!</h1>
        </header>
        <br/>
      </div>
    );
  }
}

export default Header;
