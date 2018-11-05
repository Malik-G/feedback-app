import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Results.css';

class Results extends Component {
   
   render() {
    return (
      <div className="results">
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
              
                  <TableRow >
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                  </TableRow>
             
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