import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './Understanding.css';

class Understanding extends Component {
  
   goToPage3 = () => {
      this.props.history.push('/support');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>How well did you understand today's material?</p>
        <input type="text" placeholder="On a scale of 1-5"/>
        <br></br>
        <button onClick={this.goToPage3}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Understanding));
