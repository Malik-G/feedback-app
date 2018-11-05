import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './ThankYou.css';

class ThankYou extends Component {
   
   goToPage1 = () => {
      this.props.history.push('/');
   }
   
   goToAdmin = () => {
      this.props.history.push('/results');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>Thank You!</p>
        <br></br>
        <Button onClick={this.goToPage1}>See Results</Button>
        <Button onClick={this.goToPage6}>See Results</Button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(ThankYou));