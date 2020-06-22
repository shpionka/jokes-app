import React, {useEffect, useReducer} from 'react';
import {jokeFormReducer, initialState} from './redux/joke-form-reducer';
import {getJokeAsync} from "./redux/joke-actions";
import {connect} from "react-redux";

const JokeForm = ({getJokeAsync}) => {

    const [state, dispatch] = useReducer(jokeFormReducer, initialState);

    const isAny = state.any;
    const isCustom = state.isCustom;

    useEffect(() => {
        getJokeAsync(initialState)
    }, [])

    function fetchNextJoke(e) {
        e.preventDefault();
        getJokeAsync(state);
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

                <input type="checkbox" id="dark" onClick={() => dispatch({type: 'dark'})} checked={state.dark} disabled={!state.isCustom}/>
                <label htmlFor="dark">Dark</label>

                <input type="submit" value="Next Joke"/>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJokeAsync: (options) => dispatch(getJokeAsync(options))
    }
}

export default connect(null, mapDispatchToProps)(JokeForm);
