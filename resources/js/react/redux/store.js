import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const enhancers = [];
const middleware = [
  thunk
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  return (action) => {
    if ( typeof action.then === 'function') {
      return action.then(rawDispatch);
    }

    return rawDispatch(action);
  };
};

const persistedState = localStorage.getItem('surveySharkState') ? JSON.parse(localStorage.getItem('surveySharkState')) : {};

const store = createStore(
  rootReducer,
  persistedState, //initialState
  composedEnhancers
);

store.dispatch = addPromiseSupportToDispatch(store);

store.subscribe(() => {

  let trackedState = {
    user:  store.getState().user
  };

  localStorage.setItem( 'surveySharkState', JSON.stringify( trackedState ) )
});

export default store