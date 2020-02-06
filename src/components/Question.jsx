import React, { Component } from 'react';
import '../css/Question.css';
import {buildFirebase} from '../clients/firebase.js';
// import components

// Do something with the questions

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
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
      const questions = data.val();
      console.log(questions);
    });
    return (
      <div>
         <h1> {this.props.question} </h1>
         <ul id="container">
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Question} </button>
         </ul>
      </div>
    );
  }
}


export default Question;