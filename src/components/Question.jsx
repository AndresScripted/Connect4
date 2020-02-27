import React, { Component } from 'react';
import '../css/Question.css';
// import components

// Do something with the questions

class Question extends Component {
constructor(props){
  super(props);
  this.state = {
    score: 0
  }
}
  WhenClick0(){;
    this.setState({ ask: "dontShow"});
    if (this.props.Choices[0] === this.props.Choices[this.props.CorrectIndex]){
      alert("yay good job!");
    }
    else {
      alert("zoinks scoob, thats wrong");
    }
  }
  WhenClick1(){;
    this.setState({ ask: "dontShow"});
    if (this.props.Choices[1] === this.props.Choices[this.props.CorrectIndex]){
      alert("yay good job!");
    }
    else {
      alert("zoinks scoob, thats wrong");
    }
  }
  WhenClick2(){;
    this.setState({ ask: "dontShow"});
    if (this.props.Choices[2] === this.props.Choices[this.props.CorrectIndex]){
      alert("yay good job!");
    }
    else {
      alert("zoinks scoob, thats wrong");
    }
  }
  WhenClick3(){;
    this.setState({ ask: "dontShow"});
    if (this.props.Choices[3] === this.props.Choices[this.props.CorrectIndex]){
      alert("yay good job!");
    }
    else {
      alert("zoinks scoob, thats wrong");
    }
  }


  render() {
    
    return (
      <div>
         <h1> {this.props.questionText} </h1>
         <ul id="container">
            <button  onClick={() => this.WhenClick0()}> {this.props.Choices[0]} </button>
            <button  onClick={() => this.WhenClick()}> {this.props.Choices[1]} </button>
            <button  onClick={() => this.WhenClick()}> {this.props.Choices[2]} </button>
            <button  onClick={() => this.WhenClick()}> {this.props.Choices[3]} </button>

         </ul>
               </div>
    );
  }
}


export default Question;