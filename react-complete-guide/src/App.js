import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';





class App extends Component {

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  state = {
    persons: [
      { id: 'asf12', name: 'Max', age: 28 },
      { id: 'asf123', name: 'Manu', age: 29 },
      { id: 'asf125', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {

    const style = {

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event,) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is realy working!</p>
          <button className="button"
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
        </div>
      // React.createElement('div',{className: 'App'},React.createElement('h1',null,"Hi, I'm a React App") )
    );
  }
}

export default App;