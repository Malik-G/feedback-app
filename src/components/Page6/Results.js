import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import './Results.css';

class Results extends Component {

  componentDidMount() {
    this.getResults();
  }

  getResults = () => {
    axios({
      method: 'GET',
      url: '/feedback/results'
    })
    .then((response) => {
      console.log('GET request successful!', response.data);
      this.props.dispatch({type: 'RESULTS', payload: response.data})
    })
    .catch((error) => {
      console.log('GET request unsuccessful', error);
    })
  }

  deleteResult = (id) => {
    return (event) => {
      event.preventDefault();
      axios({
        method: 'DELETE',
        url: `/feedback/delete/${id}`
      })
      .then((response) => {
        console.log('DELETE request successful!', response.data);
        this.getResults();
      })
      .catch((error) => {
        console.log('DELETE request unsuccessful', error);
      })
    }
  }
   
   render() {
    
    
    
    return (
      <div className="results">
        <section>
          <Table >
              <TableHead className="resultsTableHead">
                  <TableRow>
                      <TableCell>Feeling</TableCell>
                      <TableCell>Comprehension</TableCell>
                      <TableCell>Support</TableCell>
                      <TableCell>Comments</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody className="resultsTableBody">
                {this.props.reduxState.resultsReducer.map( feedback =>
                  <TableRow key={feedback.id}>
                      <TableCell>{feedback.feeling}</TableCell>
                      <TableCell>{feedback.understanding}</TableCell>
                      <TableCell>{feedback.support}</TableCell>
                      <TableCell>{feedback.comments}</TableCell>
                      <TableCell>
                        <Button onClick={this.deleteResult(feedback.id)} >Delete<DeleteIcon></DeleteIcon></Button>
                      </TableCell>
                  </TableRow>
                )}
              </TableBody>
          </Table>
        </section>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(Results));