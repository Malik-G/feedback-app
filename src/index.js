import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const customerInfoReducer = (state = {}, action) => {
   if (action.type === 'ADD_CUSTOMER') {
       state = action.payload;
   }
   return state;
}

const reduxStore = createStore(
   combineReducers({
      customerInfoReducer
   }),
   applyMiddleware(logger) 
)


ReactDOM.render(<Provider store={reduxStore} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
