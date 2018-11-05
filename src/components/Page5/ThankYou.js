import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './ThankYou.css';

class ThankYou extends Component {
   
   goToPage6 = () => {
      this.props.history.push('/results');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>Thank You!</p>
        <br></br>
        <button onClick={this.goToPage6}>See Results</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(ThankYou));