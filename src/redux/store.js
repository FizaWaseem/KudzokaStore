import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension'

const store= createStore(reducers, composeWithDevTools());
export default store;