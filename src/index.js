import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase} from './clients/firebase.js';

var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
      let Questions = data.val();
      const keys = Object.keys(Questions)
    //console.log(keys) // [apple, orange, pear]
      console.log(Questions[keys[0]]);
      var result = Object.values(Questions);
      for(let i = 0; i < result.length; i = i+1){
           console.log(result[i]);
          result[i] = Object.values[result[i]];
          console.log(result[i]);
      }
      console.log(result);
      ReactDOM.render(<App Questions={result}/>, document.getElementById('root'));
      
    });
