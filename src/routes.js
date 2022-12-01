import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import License from './Components/License/License';
import Tour from './Components/Tour/Tour';

export default (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/licensing">
            <License />
        </Route>
        <Route path="/tour-2022">
            <Tour />
        </Route>
    </Switch>
);
