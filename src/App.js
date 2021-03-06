import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons : [
      { id: 1, name: 'Nery', age: 21},
      { id: 2,name: 'Pedro', age: 22},
      { id: 3,name: 'Nancy', age: 49}
    ],
    showPersons : false
  }
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHndler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  render() {
    //in-line styles
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'//,
      // ':hover' : {
      //   backgroundColor : 'lightgreen',
      //   color: 'black'
      // }
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map((person, index) => {

            return <Person
            click={() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            />
          })}          
          </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color : 'black'
      // }
    }

    const classes = [];

    if(this.state.persons.length <= 2)
      classes.push('red');
    
    if(this.state.persons.length <= 1)
      classes.push('bold');
    //Using the nonymous function to pass values to a function (() => this.togglePersonsHndler), it's not recommended, React can render the page a little too often. So the best practice is using bind. 
    return (
      // <StyleRoot>
          <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is working</p>        
          <button
          style={style}
          onClick={this.togglePersonsHndler}>Toggle Persons</button>       
          {persons}      
      </div>
    /* </StyleRoot> */

    );
    //Equivalent of the code above.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, my name is Nery.'));
  }
}
export default App;
// export default Radium(App);
