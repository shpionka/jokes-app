import React from 'react';
import {connect} from "react-redux";

const JokeCard = ({joke}) => {
    return (
        <div>
            <h2>Here we go:</h2>
            <h2>{joke}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke
    }
}

export default connect(mapStateToProps)(JokeCard);