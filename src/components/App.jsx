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
       this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({factNumber:this.state.factNumber+1});
  }

  render() {
    return (
      <div className="app">
        <div id="title">Kahoot but more Fustrating! :D</div>
        <div id="questionbox">
          <Question questionText={this.props.Questions[this.state.factNumber].question_text} Choices={this.props.Questions[this.state.factNumber].choices} CorrectIndex={this.props.Questions[this.state.factNumber].correct_choice_index}/>
          </div>
      <button className="nextButton" onClick={this.handleClick}>Next Question :D</button>
      </div>

    );
  }
}

export default App;