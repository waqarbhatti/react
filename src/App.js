import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Waqar', age: 30},
      {name: 'Zain', age: 27},
      {name: 'Abubaker', age: 30}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
    //console.log('Was clicked!');
   // this.state.persons[0].name = 'Abdul Waqar';

   this.setState({persons: [
      {name: newName, age: 29},
      {name: 'Zain', age: 27},
      {name: 'Ali', age: 30}
      ] 
    }) 
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'waqar', age: 29},
        {name: event.target.value, age: 27},
        {name: 'Ali', age: 30}
      ] 
    }) 
  }

  render() {
    // inline style like this 
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is realy working</p>

        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Abdul Waqar')}>Switch Name</button>

        <Person 
           name={this.state.persons[0].name}
           age={this.state.persons[0].age} /> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Abdul!')}
          changed={this.nameChangeHandler}>
           My Hobbies: learn React 
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> 
      </div>
    );
  }
}

export default App;
