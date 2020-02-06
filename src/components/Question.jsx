import React, { Component } from 'react';
import '../css/Question.css';
import {buildFirebase} from '../clients/firebase.js';
// import components
var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = data.val();
// Do something with the questions
console.log(questions);
});
class Question extends Component {
constructor(props){
  super(props);
  this.state = { ask: "dontShow"} 
}
  WhenClick(){;
    this.setState({ ask: "show"});
  }


  render() {
    return (
      <div>
         <h1> {this.props.question} </h1>
         <ul>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Answer} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Answer} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Answer} </button>
            <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Answer} </button>
         </ul>
         <button class={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Reset} </button>
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