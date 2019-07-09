import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home';
import Coffee from './pages/Coffee'

 
const Routes = () => (
    <Switch>  
      <Route exact path='/' component={Home} />
      <Route exact path='/coffee-break' component={Coffee} />
    </Switch>
  
)
 
export default Routes;
