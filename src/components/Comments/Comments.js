import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Comments.css';

class Comments extends Component {
  
   state = {
      comments: ''
   }

   handleChange = event => {
      this.setState({ comments: event.target.value }); // set state to the value of the selected radio button
   };

   sendToRouter = () => {
      this.props.dispatch({type: 'COMMENTS',
         payload:this.state.comments
      })
      this.setState ({comments: '' }); // reset local state for the next surveyee
      this.props.history.push('/thank-you'); // go to page 4
   }
   
   render() {
    return (
      <div className="feeling">
        <p>Feel free to add any additional comments!</p>
        <textarea type="text" className="textArea" onChange={this.handleChange} value={this.state.comments} placeholder="Enter text"></textarea>
        <br></br>
        <Button onClick={this.sendToRouter} variant="contained">
          Next <img src="images/next.png" alt="Next symbol"></img>
        </Button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Comments));