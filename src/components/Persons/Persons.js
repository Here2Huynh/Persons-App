import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
            console.log('[Persons.js] inside constructor', props);
            this.lastPersonRef = React.createRef();
        }

        componentWillMount() {
            console.log('[Persons.js] inside componentWillMount()');
        }

        componentDidMount() {
            console.log('[Persons.js] inside componentDidMount()');
            this.lastPersonRef.current.focus();
        }

        componentWillReceiveProps(nextProps) {
            console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
        }

        // shouldComponentUpdate(nextProps, nextState) {
        //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
        //     return nextProps.perons !== this.props.persons || 
        //         nextProps.changed !== this.props.changed ||
        //         nextProps.clicked !== this.props.clicked;
        //     // return true
        // }
        // // can save performance if used cleverly 

        componentWillUpdate(nextProps, nextState) {
            console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
        }

        componentDidUpdate() {
            console.log('[UPDATE Persons.js] inside componentDidUpdate');
        }

        render() {
            console.log('[Persons.js] inside render()');
            return this.props.persons.map( (person, index) => {
                return <Person 
                            name={person.name} 
                            position={index}
                            age={person.age}
                            key={person.id}
                            ref={this.lastPersonRef}
                            click={() => this.props.clicked(index)}
                            changed={(event) => this.props.changed(event,person.id)}
                        />
                })   
        }

}

export default Persons;

// even if nothing is re-rendered, will go through all the life cycle methods
// which will end up with performance issues if there is a lot of child components
