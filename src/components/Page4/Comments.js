import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './Comments.css';

class Comments extends Component {
  
   goToPage5 = () => {
      this.props.history.push('/thank-you');
   }
   
   render() {
    return (
      <div className="feeling">
        <p>Feel free to add any additional comments</p>
        <textarea type="text" placeholder="Enter text"></textarea>
        <br></br>
        <button onClick={this.goToPage5}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Comments));