import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {  
    persons : [
      { id: 'wfww', name: 'Manu', age: 29 },
      { id: 'were', name: 'Max', age: 28 },
      { id: 'werw', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // always update state by immutable fashion
    // create copies of the list by .slice() or spread operator 
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { 
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons : persons } );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render() {
    let persons = null; 
    

    if ( this.state.showPersons ) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
    }

    // React uses react with lists and such to run a VDOM and DOM change comparisons
    // index is not really a good key because it part of the list so if there is any changes to the list, the index will change



    return (
      <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          { persons }
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// it is best practice to wrap everything into one root element 

// radium, npm package allows us to use inline styles with psuedo selectors and media queries 

// npm run eject allows you to tweak the node modules 

// App.js for best practice is to hold all the components 

