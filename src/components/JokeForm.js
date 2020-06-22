import React, {useReducer} from 'react';

const initialState = {
    any: true,
    programming: false,
    misc: false,
    dark: false,
    isCustom: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'any':
            return {
                ...initialState,
                any: true
            }
        case 'programming':
            return {
                ...state,
                programming: !state.programming,
                any: false
            }
        case 'misc':
            return {
                ...state,
                misc: !state.misc,
                any: false
            }
        case 'dark':
            return {
                ...state,
                dark: !state.dark,
                any: false
            }
        case 'isCustom':
            return {
                ...state,
                isCustom: true,
                any: false
            }
        default:
            return state;
    }
};

const JokeForm = ({getJoke}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const isAny = state.any;
    const isCustom = state.isCustom;

    function fetchNextJoke(e) {
        e.preventDefault();
        getJoke(state);
    }

    return (
        <div>
            <form onSubmit={fetchNextJoke}>
                <h2>Select a joke category</h2>

                <input type="radio" id="any" checked={isAny} onChange={() => dispatch({type: 'any'})}/>
                <label htmlFor="any">Any</label><br/>

                <input type="radio" id="custom"  checked={isCustom}
                       onChange={() => dispatch({type: 'isCustom'})}/>
                <label htmlFor="custom">Custom</label>

                <input type="checkbox" id="programming"  onClick={() => dispatch({type: 'programming'})} checked={state.programming} disabled={!state.isCustom}/>
                <label htmlFor="programming">Programming</label>

                <input type="checkbox" id="miscellaneous" onClick={() => dispatch({type: 'misc'})} checked={state.misc} disabled={!state.isCustom}/>
                <label htmlFor="miscellaneous">Miscellaneous</label>

                <input type="checkbox" id="dark" onClick={() => dispatch({type: 'dark'})} checked={state.dark} disabled={!state.isCustom}/>
                <label htmlFor="dark">Dark</label>

                <input type="submit" value="Next Joke"/>
            </form>
        </div>
    )
}


export default JokeForm;