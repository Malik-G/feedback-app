import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
   if (action.type === 'FEELING_RATING') {
       state = [action.payload]
   }
   return state;
}

const understandingReducer = (state = [], action) => {
   if (action.type === 'UNDERSTANDING_RATING') {
       state = [action.payload]
   }
   return state;
}

const supportReducer = (state = [], action) => {
   if (action.type === 'SUPPORT_RATING') {
       state = [action.payload]
   }
   return state;
}

const commentsReducer = (state = [], action) => {
   if (action.type === 'COMMENTS') {
      state = [action.payload]
  }
  return state;
}


const resultsReducer = (state = [], action) => {
   if (action.type === 'RESULTS') {
      state = action.payload
  }
  return state;
}

const flaggedReducer = (state = [], action) => {
   if (action.type === 'FLAGGED') {
       state = [action.payload]
   }
   return state;
}

const reduxStore = createStore(
   combineReducers({
      feelingReducer,
      understandingReducer,
      supportReducer,
      commentsReducer,
      resultsReducer,
      flaggedReducer
   }),
   applyMiddleware(logger)
)


ReactDOM.render(<Provider store={reduxStore}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
