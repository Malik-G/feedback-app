import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './Feeling.css';

class Feeling extends Component {
  
   goToPage2 = () => {
      this.props.history.push('/understanding');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>How are you feeling today?</p>
        <input type="text" placeholder="On a scale of 1-5"/>
        <br></br>
        <button onClick={this.goToPage2}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Feeling));
