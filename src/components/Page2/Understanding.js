import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import RadioButtons from '../RadioButtons/RadioButtons';
import './Understanding.css';

class Understanding extends Component {
   
   nextPage = (rating) => {
      // Dispatch to understandingReducer
      this.props.dispatch({
         type: 'UNDERSTANDING_RATING',
         payload: rating
      })
      this.props.history.push('/support'); // go to page 3
   }
   
   render() {
    return (
      <div className="feeling">
        <p>How well did you understand today's material?</p>
        <RadioButtons nextPage={this.nextPage}/>
      </div>
    );
  }
}

// const mapReduxStateToProps = (reduxState) => {
//    return {reduxState};
// }

export default withRouter(connect()(Understanding));
