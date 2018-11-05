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
   
   render() {
    
   
    
    return (
      <div className="results">
       <pre>
       {JSON.stringify(this.props.reduxState.resultsReducer)}
       </pre>
        <section>
          <Table className="resultsTable">
              <TableHead>
                  <TableRow>
                      <TableCell>Feeling</TableCell>
                      <TableCell>Comprehension</TableCell>
                      <TableCell>Support</TableCell>
                      <TableCell>Comments</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxState.resultsReducer.map( feedback =>
                  <TableRow key={feedback.id}>
                      <TableCell><p>{feedback.feeling}</p></TableCell>
                      <TableCell><p>{feedback.understanding}</p></TableCell>
                      <TableCell><p>{feedback.support}</p></TableCell>
                      <TableCell><p>{feedback.comments}</p></TableCell>
                      <TableCell><p><Button>Delete
                        <DeleteIcon></DeleteIcon></Button></p>
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