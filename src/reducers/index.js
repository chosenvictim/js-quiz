import { combineReducers } from 'redux';
import actions from '../actions/actionNames.js';

const initialState = {
    fetching: false,
    fetched: false,
    fetchFailed: false,
    questions: []
};

function questionsList(state = initialState, action) {
    switch(action.type) {
        case actions.GET_QUESTIONS: {
            return Object.assign({}, state, {
                fetching: true
            });
        }

        case actions.GET_QUESTIONS_SUCCESS: {
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                fetchFailed: false,
                questions: action.payload
            });
        }

        case actions.GET_QUESTIONS_FAILED: {
            return Object.assign({}, state, {
                fetching: false,
                fetched: false,
                fetchFailed: true
            });
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    questionsList
});
