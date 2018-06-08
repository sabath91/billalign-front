import React, { Component } from 'react';

import classes from './App.css';
import Header from "./components/Header/Header";
import Layout from "./hoc/Layout/Layout";
import StartNow from "./components/UI/StartNow/StartNow";
import BillallignEvent from "./containers/BillalignEvent/BillallignEvent";


class App extends Component {
  render() {
    return (
        <div className={classes.App}>
            <Layout>
                <StartNow/>
                <BillallignEvent/>
            </Layout>
        </div>
    );
  }
}

export default App;
