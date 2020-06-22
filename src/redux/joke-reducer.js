import * as actionTypes from "./action-types";

const initialState = {
    joke: null,
    error: false,
    isLoading: false
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_JOKE_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.GET_JOKE_SUCCESS:
            return {
                ...state,
                joke: action.joke,
                error: false,
                isLoading: false
            }
        case actionTypes.GET_JOKE_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default: {
            return state;
        }
    }
}

export default jokeReducer;