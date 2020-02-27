import React, { Component } from 'react';
import '../css/Question.css';
// import components

// Do something with the questions

class Question extends Component {
constructor(props){
  super(props);
  this.state = { ask: "show"} 
}
  WhenClick(){;
    this.setState({ ask: "dontShow"});    
    if (this.props.Choices[3] === this.props.Choices[this.props.CorrectIndex]){
      console.log(this.props.Choices[3]);
    }
  }


  render() {
    
    return (
      <div>
         <h1> {this.props.questionText} </h1>
         <ul id="container">
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Choices[1]} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Choices[1]} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Choices[2]} </button>
            <button className={this.state.ask} onClick={() => this.WhenClick()}> {this.props.Choices[3]} </button>
         </ul>
               </div>
    );
  }
}


export default Question;