import actions from './actionNames.js';

const QUESTIONS_URL = 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';

function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw response;
    }
}

function parseJSON(response) {
    return response.json();
}

export function fetchQuestions() {
    return function(dispatch) {
        dispatch({ type: actions.GET_QUESTIONS });
        fetch(QUESTIONS_URL, {
            method: "GET"
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(jsonResponse => {
            dispatch({
                type: actions.GET_QUESTIONS_SUCCESS,
                payload: jsonResponse
            });
        })
        .catch((err) => {
            parseJSON(err)
            .then(error => {
                console.error("There is an error !!" + error.message);
                dispatch({
                    type: actions.GET_QUESTIONS_FAILED,
                    payload: error.message
                });
            })
        });
    }
}
