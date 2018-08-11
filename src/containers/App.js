import React, { PureComponent } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass2';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {  
      persons : [
        { id: 'wfww', name: 'Manu', age: 29 },
        { id: 'were', name: 'Max', age: 28 },
        { id: 'werw', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }
  // can save performance if used cleverly 
  // made sure only update when there is realy change 

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }


  // this state init syntax is new 
  // state = {  
  //   persons : [
  //     { id: 'wfww', name: 'Manu', age: 29 },
  //     { id: 'were', name: 'Max', age: 28 },
  //     { id: 'werw', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

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

    console.log('[App.js] inside render()');
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
      <Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          { persons }
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);

// it is best practice to wrap everything into one root element 

// radium, npm package allows us to use inline styles with psuedo selectors and media queries 

// npm run eject allows you to tweak the node modules 

// App.js for best practice is to hold all the components 

// React best practice is to use the class based components as little as possible
// because states can get hard to track, use functional components as much as possible

// stateful components = containers 
// class XY extends Component
// access to state 
// lifecycle hooks 
// access state and props via "this" 
// this.state.xy & this.props.xy 

// stateless 
// const xy = (props) => (...)
// props.XY 
