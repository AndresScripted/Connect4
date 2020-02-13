import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
// import components

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      // factNumber: 0
    // }
    // this.handleClick = this.handleClick.bind(this);
    //console.log(keys) // [apple, orange, pear]
      this.state = {
         factNumber: 0
       }
  }
  render() {
    return (
      <div className="app">
        <div id="title">Kahoot but more Fustrating! :D</div>
        <div id="questionbox">
          <Question Question={this.props.Questions[this.state.factNumber]} /></div>
      </div>
    );
  }
}

export default App;