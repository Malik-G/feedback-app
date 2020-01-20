import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './ThankYou.css';

class ThankYou extends Component {

	componentDidMount() {
		this.postSurveyData();
	}

	postSurveyData = () => {

		let completedSurvey = {
			feeling: 0,
			understanding: 0,
			support: 0,
			comments: '',
		}

		completedSurvey.feeling = Number(this.props.reduxState.feelingReducer)
		completedSurvey.understanding = Number(this.props.reduxState.understandingReducer)
		completedSurvey.support = Number(this.props.reduxState.supportReducer)
		completedSurvey.comments = this.props.reduxState.commentsReducer[0]
		//console.log(completedSurvey);

		// if (completedSurvey.feeling = 0 ||) {

		// }

		axios({
			method: 'POST',
			url: '/feedback/addToDatabase',
			data: completedSurvey
		})
			.then((response) => {
				console.log('POST request successful!', response);
			})
			.catch((error) => {
				console.log('POST request unsuccessful...');
			})
	}

	goToHomePage = () => {
		this.props.history.push('/');
	}

	goToAdmin = () => {
		this.props.history.push('/results');
	}

	render() {
		return (
			<div className="feeling">
				<p>Thank You!</p>
				<br></br>
				<Button onClick={this.goToHomePage}>Home</Button>
				<Button onClick={this.goToAdmin}>Admin</Button>
			</div>
		);
	}
}

const mapReduxStateToProps = (reduxState) => {
	return { reduxState };
}

export default withRouter(connect(mapReduxStateToProps)(ThankYou));