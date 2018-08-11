import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = ( props ) => {

    const assignClasses = [];
    let btnClass = classes.Button;

    if ( props.showPersons ) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if ( props.persons.length <= 2 ) {
      assignClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return(
        <Aux>
            <h1> Hi, I'm a React App</h1>
            <h2>{ props.appTitle }</h2>
            <p className={assignClasses.join(' ')}> This is really working!</p>
            <button 
            className={btnClass}
            onClick={ props.clicked }>Toggle Persons</button>
        </Aux>
    );
};

export default Cockpit;

// technique to use wrapping component to avoid using a html element in
// that it will mess something up like stlying such as flex box 

// if on React 16.2 
// If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

// It's actually not called Aux  but you simply use <>  - an empty JSX tag.

// So the following code

// <Aux>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </Aux>
// becomes

// <>
//     <h1>First Element</h1>
//     <h1>Second Element</h1>
// </>
// Behind the scenes, it does the same our Aux  component did.