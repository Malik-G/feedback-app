import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import RadioButtons from '../RadioButtons/RadioButtons';
import './Feeling.css';

class Feeling extends Component {

   nextPage = (rating) => {
      // Dispatch to feelingReducer
      this.props.dispatch({
         type: 'FEELING_RATING',
         payload: rating
      })
      // this.setState ({rating: 0 }); // reset local state for the next surveyee
      this.props.history.push('/understanding');
   }
   
   render() {
    return (
      <div >
        <p>How are you feeling today?</p>
        <RadioButtons nextPage={this.nextPage}/>
      </div>
    );
  }
}

// const mapReduxStateToProps = (reduxState) => {
//    return {reduxState};
// }

export default withRouter(connect()(Feeling));
