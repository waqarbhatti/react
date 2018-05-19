import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Waqar', age: 30},
      {name: 'Zain', age: 27},
      {name: 'Waqar', age: 30}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>{
    //console.log('Was clicked!');
   // this.state.persons[0].name = 'Abdul Waqar';

   this.setState({persons: [
      {name: 'Abdul Waqar', age: 29},
      {name: 'Zain', age: 27},
      {name: 'Ali', age: 30}
      ] 
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is realy working</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* call person class */}
        <Person name={this.state.persons[0].name} name={this.state.persons[0].age} /> 
        <Person name={this.state.persons[1].name} name={this.state.persons[1].age}>
           My Hobbies: learn React 
        </Person>
        <Person name={this.state.persons[2].name} name={this.state.persons[2].age}/> 
      </div>
    );
  }
}

export default App;
