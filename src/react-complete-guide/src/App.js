import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1> Hi, there.  I'm a react app.</h1>
    //   </div>
    // );
    return React.createElement('div', { className: 'App' }, 
            React.createElement('h1', null, 'Hi, there.  I\'m a React app!!!'));
  }
}

export default App;
