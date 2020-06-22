import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import JokeForm from "./components/JokeForm";
import JokeCard from "./components/JokeCard";
import {getJokeAsync} from "./redux/action-creators/joke-actions";

function App({joke, getJokeAsync}) {
  return (
    <div className="App">
      <header className="App-header">
          <h1>HELLO</h1>
          <JokeForm getJoke={getJokeAsync}/>
          <JokeCard joke={joke}/>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJokeAsync: (options) => dispatch(getJokeAsync(options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
