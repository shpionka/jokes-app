import * as actionTypes from "./action-types";

export const getJokeStart = () => {
    return {
        type: actionTypes.GET_JOKE_START
    }
}

export const getJokeSuccess = (joke) => {
    return {
        type: actionTypes.GET_JOKE_SUCCESS,
        joke: joke
    }
}

export const getJokeFail = (error) => {
    return {
        type: actionTypes.GET_JOKE_FAIL,
        error: error
    }
}

function buildUrl(options){
    const category = Object.keys(options).filter(item => item !== 'isCustom')
        .reduce((acc, item) => {
            if (options[item]){
                acc.push(item)
            }

            return acc;
        }, []).join(',')

    return `https://sv443.net/jokeapi/v2/joke/${category}?blacklistFlags=religious,racist,sexist&type=single`;
};

export const getJokeAsync = (options) => {
    return dispatch => {
        dispatch(getJokeStart());
        fetch(buildUrl(options))
            .then(resp => resp.json())
            .then(data => dispatch(getJokeSuccess(data.joke)))
            .catch(e => dispatch(getJokeFail(e)));
    }
}