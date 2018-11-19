import axios from 'axios';

// Initial State

const initialState = {
  items: [],
  errors: {}
};

// Actions
const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';

const GENERIC_ANSWER_ERROR = 'GENERIC_QUESTIONS_ERROR';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        items: action.data
      };

    case GET_QUESTIONS_FAIL: // If the upload fails, store the answers locally
      return {
        ...state,
        errors: action.data.error
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
export function getQuestionsSuccess(data) {
  return {type: GET_QUESTIONS_SUCCESS, data};
}

export function getQuestionsFailed(data) {
  return {type: GET_QUESTIONS_FAIL, data};
}


// Thunks

export function getQuestions() {
  return function action(dispatch) {

    return axios.get("/api/questions").then(response => {

      dispatch(getQuestionsSuccess(response.data));

    }).catch(error => {

      dispatch(getQuestionsFailed({error: error}));

    })

  }
}
