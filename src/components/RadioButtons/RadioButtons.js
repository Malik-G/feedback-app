import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


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
         <Radio
            checked={this.state.rating === "1"}
            onChange={this.handleChange}
            name="radio-button"
            color="primary"
            value="1"
         />
         <Radio
            checked={this.state.rating === "2"}
            onChange={this.handleChange}
            name="radio-button"
            color="primary"
            value="2"
         />
         <Radio
            checked={this.state.rating === "3"}
            onChange={this.handleChange}
            name="radio-button"
            color="default"
            value="3"
         />
         <Radio
            checked={this.state.rating === "4"}
            onChange={this.handleChange}
            name="radio-button"
            color="secondary"
            value="4"
         />
         <Radio
            checked={this.state.rating === "5"}
            onChange={this.handleChange}
            name="radio-button"
            color="secondary"
            value="5"
         />
         <br></br>
         <Button onClick={this.sendToRouter} variant="outlined" className="nextPageBtn">
            Next <img src="images/next.png" alt="Next symbol"></img>
         </Button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default connect(mapReduxStateToProps)(RadioButtons);