import React from 'react';
import classes from './Greetings.css'

const greetings = (props) => {
    return (
          <article className={classes.Greetings}>
            <h1>{props.greetings}</h1>
            <h3>{props.additionalComment}</h3>
          </article>
    )
};

export default greetings;