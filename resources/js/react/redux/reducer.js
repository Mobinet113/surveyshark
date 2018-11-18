import { combineReducers } from 'redux';
import answers from './modules/answer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  answers,
  routing: routerReducer
});

export default rootReducer;