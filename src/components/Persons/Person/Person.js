import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass2';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {

    // const rnd = Math.random();

    // if ( rnd > .7 ) {
    //     throw new Error('Something went wrong');
    // }
    constructor(props) {
        super(props);
            console.log('[Person.js] inside constructor', props);
            this.inputElement = React.createRef();
        }

        componentWillMount() {
            console.log('[Person.js] inside componentWillMount()');
        }

        componentDidMount() {
            console.log('[Person.js] inside componentDidMount()');
            if (this.props.position === 0) {
                this.inputElement.current.focus();
            }
        }

        focus() {
            this.inputElement.current.focus();
        }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
// type check the props that gets passed through 
// does not work with functional components 

export default withClass(Person, classes.Person);

// props.children points to any elements nested in between the opening and closing tag

// refs mainly used for focus and media playbacks, NOT FOR STYLING 

// React 16.3
// easier ref syntax
// 