import React, {useEffect, useReducer} from 'react';
import {jokeFormReducer, initialState} from './redux/joke-form-reducer';
import {getJokeAsync} from "./redux/joke-actions";
import {connect} from "react-redux";
import {Form, Radio, Checkbox, Button, Typography} from 'antd';

import "./JokeForm.scss";

const inputStype = {
    height: '30px',
    lineHeight: '30px',
    marginLeft: '10px',
    marginRight: '5px'
};

const JokeForm = ({getJokeAsync}) => {

    const [state, dispatch] = useReducer(jokeFormReducer, initialState);

    const isAny = state.any;
    const isCustom = state.isCustom;

    useEffect(() => {
        getJokeAsync(initialState)
    }, [])

    function fetchNextJoke(e) {
        getJokeAsync(state);
    }

    return (
        <div className="joke-form">
            <Typography.Title className="joke-form-header" level={4}>Select a joke category</Typography.Title>
            <Form onFinish={fetchNextJoke} className="joke-form-element">
                <Form.Item>
                    <Radio style={inputStype} id="any" checked={isAny} onChange={() => dispatch({type: 'any'})}/>
                    <label htmlFor="any">Any</label>
                </Form.Item>

                <Form.Item>
                    <Radio style={inputStype} id="custom" checked={isCustom}
                           onChange={() => dispatch({type: 'isCustom'})}/>
                    <label htmlFor="custom">Custom</label>

                    <Checkbox style={inputStype} type="checkbox" id="programming" onClick={() => dispatch({type: 'programming'})}
                           checked={state.programming} disabled={!state.isCustom}/>
                    <label htmlFor="programming">Programming</label>

                    <Checkbox style={inputStype} id="dark" onClick={() => dispatch({type: 'dark'})} checked={state.dark}
                           disabled={!state.isCustom}/>
                    <label htmlFor="dark">Dark</label>
                </Form.Item>

                <Button htmlType="submit" type="primary">
                    Next Joke
                </Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJokeAsync: (options) => dispatch(getJokeAsync(options))
    }
}

export default connect(null, mapDispatchToProps)(JokeForm);
