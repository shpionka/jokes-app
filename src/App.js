import React from 'react';
import './App.css';
import JokeForm from "./JokeForm";
import JokeCard from "./JokeCard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>HELLO</h1>
                <JokeForm/>
                <JokeCard/>
            </header>
        </div>
    );
}

export default App;
