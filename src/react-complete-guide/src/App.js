import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Kate', age: 13 },
      { name: 'Chloe', age: 10 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, there.  I'm a react app.</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, there.  I\'m a React app!!!'));
  }
}

export default App;
