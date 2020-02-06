import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        <div id="title">Kahoot but more Fustrating! :D</div>
        <div id="questionbox">
          <Question Question="Question" /></div>
      </div>
    );
  }
}

export default App;