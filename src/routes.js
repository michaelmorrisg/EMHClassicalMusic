import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import License from "./Components/License/License"


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/licensing" component={License} />
        
    </Switch>
)