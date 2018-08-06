import React from 'react';
import classes from './Person.css';


const person = ( props ) => {

    // const rnd = Math.random();

    // if ( rnd > .7 ) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={ classes.Person }>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;

// props.children points to any elements nested in between the opening and closing tag