import axios from 'axios';

// Initial State

const initialState = {
  answers: {

  }
};


// Actions
const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
const SUBMIT_ANSWER_FAIL    = 'SUBMIT_ANSWER_FAIL';

// Reducer
export default function reducer(state = initialState.answers, action) {
  switch (action.type) {
    case SUBMIT_ANSWER_SUCCESS:
      return state

    default: return state;
  }
}


// Action Creators
export function submitAnswerSuccess(data) {
  return { type: AUCTION_CREATED_SUCCESS, data };
}


// Thunks

export function submitAnswer() {
  return function action(dispatch) {

    dispatch( submitAnswerSuccess("Answer") );

  }
}