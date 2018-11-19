import axios from 'axios';

// Initial State

const initialState = {
  uploaded: [], // Answers that have been uploaded
  waiting: [], // Answers waiting to be uploaded
  errors: {}
};

// Actions
const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
const SUBMIT_ANSWER_FAIL = 'SUBMIT_ANSWER_FAIL';

const SUBMIT_WAITING_ANSWERS_SUCCESS = 'SUBMIT_WAITING_ANSWERS_SUCCESS';
const SUBMIT_WAITING_ANSWERS_FAIL = 'SUBMIT_WAITING_ANSWERS_FAIL';

const GENERIC_ANSWER_ERROR = 'GENERIC_ANSWER_ERROR';

// Reducer
export default function reducer(state = initialState, action) {

  switch (action.type) {

    case SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        uploaded: state.uploaded.concat( action.data )
      };

    case SUBMIT_ANSWER_FAIL: // If the upload fails, store the answers locally
      return {
        ...state,
        waiting: state.waiting.concat( action.data.answers ),
        errors: action.data.error
      };

    case SUBMIT_WAITING_ANSWERS_SUCCESS:
      return {
        ...state,
        uploaded: state.uploaded.concat( action.data ),
        waiting: [],
        errors: {}
      };

    case GENERIC_ANSWER_ERROR:
      return {
        ...state,
        errors: action.data
      };

    default:
      return state;
  }
}


// Action Creators
export function submitAnswerSuccess(data) {
  return {type: SUBMIT_ANSWER_SUCCESS, data};
}

export function submitAnswerFailed(data) {
  return {type: SUBMIT_ANSWER_FAIL, data};
}

export function submitWaitingAnswersSuccess(data) {
  return {type: SUBMIT_WAITING_ANSWERS_SUCCESS, data};
}

export function genericAnswerError(error) {
  return {type: GENERIC_ANSWER_ERROR, error};
}

// Thunks

export function submitAnswer(answers) {
  return function action(dispatch) {

    let payload = [ answers ];

    return axios.post("/api/answer/store", {answers: payload} ).then( () => {

      dispatch(submitAnswerSuccess(answers));

    }).catch( error => {

      dispatch(submitAnswerFailed( { answers: answers, error: error } ));

    })

  }
}

export function submitWaitingAnswers() {
  return function action(dispatch, getState) {

    let waitingAnswers = getState().answers.waiting;

    return axios.post("/api/answer/store", {answers: waitingAnswers} ).then( () => {

      dispatch(submitWaitingAnswersSuccess(waitingAnswers));

    }).catch( error => {

      dispatch(genericAnswerError( error ));

    })

  }
}