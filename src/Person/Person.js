import React, {Component} from 'react';

import './Person.css'
// import Radium from 'radium';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' :{
    //         width: '450px'
    //     }
    // }
    return (
        <div className="Person" >
            <p onClick={props.click}>I'm a person, my name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
    )
}

export default person;
// export default Radium(person);