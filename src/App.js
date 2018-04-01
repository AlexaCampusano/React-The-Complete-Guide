import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Nery', age: 21},
      { name: 'Pedro', age: 22},
      { name: 'Nancy', age: 49}
    ]
  }

  switchNameHandler = (newName) =>{
   //Dont do this-> this.state.persons[0].name = "Alexandra";
   this.setState({persons : [
    { name: newName, age: 21},
    { name: 'Pedro', age: 22},
    { name: 'Nancy', age: 49}
  ]})
  }

  nameChangedHandler = (event) =>{
    this.setState({persons : [
      { name: 'Alexandra', age: 21},
      { name: event.target.value, age: 22},
      { name: 'Nancy', age: 49}
    ]})
  }

  render() {
    //Using the nonymous function to pass values to a function, it's not recommended, React can render the page a little too often. So the best practice is using bind.
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is working</p>        
        <button onClick={() => this.switchNameHandler('Alexandra')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Nery')}
        changed={this.nameChangedHandler}>My hobbies: Love my girlfriend and be awesome.</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>

    );
    //Equivalent of the code above.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, my name is Nery.'));
  }
}

export default App;
