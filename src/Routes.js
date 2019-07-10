import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home'
import Coffee from './pages/Coffee'
import Infraestrutura from './pages/Infraestrutura'
import Palestrantes from './pages/Palestrantes'
import Locais from './pages/Locais'
import Brindes from './pages/Brindes'
import Musicos from './pages/Musicos'
import Buffet from './pages/Buffet'

 
const Routes = () => (
    <Switch>  
      <Route exact path='/' component={Home} />
      <Route exact path='/coffee-break' component={Coffee} />
      <Route exact path='/infraestrutura' component={Infraestrutura} />
      <Route exact path='/palestrantes' component={Palestrantes} />
      <Route exact path='/locais' component={Locais} />
      <Route exact path='/brindes' component={Brindes} />
      <Route exact path='/musicos' component={Musicos} />
      <Route exact path='/buffet' component={Buffet} />
    </Switch>
  
)
 
export default Routes;
