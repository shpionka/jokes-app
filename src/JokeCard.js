import React from 'react';
import {connect} from "react-redux";
import "./JokeCard.scss";
import { Typography } from 'antd';

const { Title } = Typography;

const JokeCard = ({joke}) => {
    return (
        <div className="joke-card">
            <Title level={3}>{joke}</Title>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke
    }
}

export default connect(mapStateToProps)(JokeCard);