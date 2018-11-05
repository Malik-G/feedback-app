import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './Support.css';

class Support extends Component {
  
   goToPage4 = () => {
      this.props.history.push('/comments');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>How well do you feel supported by staff?</p>
        <input type="text" placeholder="On a scale of 1-5"/>
        <br></br>
        <button onClick={this.goToPage4}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Support));