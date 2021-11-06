import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/index'
import Login from '../pages/Login/index'
import New from '../pages/Post/New'

export default function AllRotes() {
  return (
  <Switch>
    <Route exact path='/' component={ Login } />
    <Route exact path='/home' component={ Home } />
    <Route exact path='/home/new' component={ New } />
  </Switch>
  )
}
