import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, there.  I'm a react app.</h1>
        <p>This is really working.</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Kate" age="13"/>
        <Person name="Chloe" age="10"/>
        
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, there.  I\'m a React app!!!'));
  }
}

export default App;
