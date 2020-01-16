import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
        Add your QuestionText, Reset Button and AnswerButtons here. 
         <h1> Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default Question;