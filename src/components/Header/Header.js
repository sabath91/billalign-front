import React from "react";
import logo from '../../logo.svg';
import classes from './Header.css';

const header = (props) => {
    return (
         <header className={classes["App-header"]}>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
          <h1 className={classes["App-title"]}>Welcome to Billalign</h1>
          <h2 className={classes["App-subtitle"]}>Easy splitting of group expenses<br/>
              The simplest way to calculate who owes what  </h2>
        </header>
    )
};

export default header;