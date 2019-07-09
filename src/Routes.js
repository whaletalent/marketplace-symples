import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './pages/Home';
import Coffee from './pages/Coffee'

 
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/coffee-break' component={Coffee} />
    </Switch>
  </Router>
)
 
export default Routes;
