import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

const Roster = () =>
  (<Switch>
    <Route exact path="/roster" component={FullRoster}></Route>
    <Route path="/roster/:number" component={Player}></Route>
  </Switch>)


export default Roster 