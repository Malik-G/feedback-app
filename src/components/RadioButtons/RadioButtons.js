import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './RadioButtons.css'


class RadioButtons extends Component {
   
   state = {
      rating: 0
   }

   handleChange = event => {
      this.setState({ rating: event.target.value }); // set state to the value of the selected radio button
   };

   sendToRouter = () => {
      if (this.state.rating === 0){
         alert('Please select an option...');
         return; //prevents the user from advancing without selecting an option
      }
      this.props.nextPage(this.state.rating); // dispatch occurs in the nextPage function
      this.setState ({rating: 0 }); // reset local state for the next surveyee
   }

   render() {
    return (
      <div className="radioButtons">
         <label htmlFor="radio1">1=Poor</label>
         <Radio
            checked={this.state.rating === "1"}
            onChange={this.handleChange}
            name="radio-button"
            className="radio1"
            color="primary"
            value="1"
         />
         <label htmlFor="radio2">2=Meh...</label>
         <Radio
            checked={this.state.rating === "2"}
            onChange={this.handleChange}
            name="radio-button"
            className="radio2"
            color="primary"
            value="2"
         />
         <label htmlFor="radio3">3=Average</label>
         <Radio
            checked={this.state.rating === "3"}
            onChange={this.handleChange}
            name="radio-button"
            className="radio3"
            color="default"
            value="3"
         />
         <label htmlFor="radio4">4=Good</label>
         <Radio
            checked={this.state.rating === "4"}
            onChange={this.handleChange}
            name="radio-button"
            className="radio4"
            color="secondary"
            value="4"
         />
         <label htmlFor="radio5">5=Excellent</label>
         <Radio
            checked={this.state.rating === "5"}
            onChange={this.handleChange}
            name="radio-button"
            className="radio5"
            color="secondary"
            value="5"
         />
         <br></br>
         <div className="nextPageBtn">
          <Button onClick={this.sendToRouter} variant="contained">
              Next <img src="images/next.png" alt="Next symbol"></img>
          </Button>
         </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default connect(mapReduxStateToProps)(RadioButtons);