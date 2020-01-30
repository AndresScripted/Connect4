import React, { Component } from 'react';
import '../css/Question.css';
// import components


class Question extends Component 
  
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

export default Question;