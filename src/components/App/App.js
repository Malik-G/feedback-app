import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Page1/Feeling';
import Understanding from '../Page2/Understanding';
import Support from '../Page3/Support';
import Comments from '../Page4/Comments';
import ThankYou from '../Page5/ThankYou';
import Results from '../Page6/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/support" component={Support} />
            <Route path="/comments" component={Comments} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/results" component={Results} />
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);
