import { combineReducers } from 'redux';
import answers from './modules/answer';
import questions from './modules/questions';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  answers,
  questions,
  routing: routerReducer
});

export default rootReducer;