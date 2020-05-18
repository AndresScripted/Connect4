import React, { Component } from 'react';



class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        board: [
          [ null, null, null, null, null, null, null]
          [ null, null, null, null, null, null, null]
          [ null, null, null, null, null, null, null]
          [ null, null, null, null, null, null, null]
          [ null, null, null, null, null, null, null]
          [ null, null, null, null, null, null, null ]
        ],
        currentPlayer: 1, 
        GameOver: false,
      }
    }
      
  
    render() {
      return (
        <div>

        </div>
      );
    }
  }
  
  export default App;