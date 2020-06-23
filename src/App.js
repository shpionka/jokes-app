import React from 'react';
import JokeForm from "./JokeForm";
import JokeCard from "./JokeCard";
import 'antd/dist/antd.css';
import './App.scss';

import {Layout, Typography} from 'antd';

const {Content} = Layout;

function App() {
    return (
        <Layout className="joke-app">
            <Content className="joke-app-content">
                <Typography.Title level={2}>Jokes generator</Typography.Title>
                <JokeForm/>
                <JokeCard/>
            </Content>
        </Layout>

    );
}

export default App;
