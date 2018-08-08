import React, { Component } from 'react';
import classes from './Person.css';


class Person extends Component {

    // const rnd = Math.random();

    // if ( rnd > .7 ) {
    //     throw new Error('Something went wrong');
    // }
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        }

        componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
        }

        componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <div className={ classes.Person }>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
};

export default Person;

// props.children points to any elements nested in between the opening and closing tag