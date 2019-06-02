import { createStore, applyMiddleware } from 'redux';
import {reducer as dummyReducer} from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios'
import {composeWithDevTools} from 'redux-devtools-extension'
import loggingMiddleware from 'redux-logger'; 


const store = createStore(
  dummyReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware))
);

export default store;
