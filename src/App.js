import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is working</p>
      </div>
    );
    //Equivalent of the code above.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, my name is Nery.'));
  }
}

export default App;
