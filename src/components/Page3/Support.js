import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import RadioButtons from '../RadioButtons/RadioButtons';
import './Support.css';

class Support extends Component {
  
   nextPage = (rating) => {
      // Dispatch to supportReducer
      this.props.dispatch({
         type: 'SUPPORT_RATING',
         payload: rating
      })
      this.props.history.push('/comments'); // go to page 4
   }
   
   render() {
    return (
      <div className="feeling">
        <p>How well do you feel supported by staff?</p>
        <RadioButtons nextPage={this.nextPage}/>
      </div>
    );
  }
}

// const mapReduxStateToProps = (reduxState) => {
//    return {reduxState};
// }

export default withRouter(connect()(Support));