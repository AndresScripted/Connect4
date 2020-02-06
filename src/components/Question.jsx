import React, { Component } from 'react';
import '../css/Question.css';
// import components
  
class Question extends Component {
constructor(props){
  super(props);
  this.state = { ask: "show"} 
}
  WhenClick(){;
    this.setState({ ask: "dontShow"});
    console.log(this.state.ask);
  }


  render() {
    return (
      <div>
         <h1> {this.props.question} </h1>
         <ul id="container">
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
         </ul>
      </div>
    );
  }
}
class QuestionConstructor {
    constructor (color, shape, correct) {
      this.color = color;
      this.shape = shape;
      this.correct = correct;
    }
}
export default Question;