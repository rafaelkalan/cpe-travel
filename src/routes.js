import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Local from './pages/Local';
/*import { images } from '../src/constantes/Images';*/

function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/local" component={Local} />
        <Route exact path="/RioDeJaneiro" render={(props)=> <Local {...props} local='RioDeJaneiro' />}/>
        <Route exact path="/Salvador" render={(props)=> <Local {...props} local='Salvador' />}/>
        <Route exact path="/Olinda" render={(props)=> <Local {...props} local='Olinda' />} />
        <Route exact path="/Amsterdam" render={(props)=> <Local {...props} local='Amsterdam' />} />
        <Route exact path="/Paris" render={(props)=> <Local {...props} local='Paris' />}/>
        <Route exact path="/Porto" render={(props)=> <Local {...props} local='Porto' />}/>
        <Route exact path="/NovaYork" render={(props)=> <Local {...props} local='NovaYork' />}/>
        <Route exact path="/IPhiPhi" render={(props)=> <Local {...props} local='IPhiPhi' />}/>
        <Route exact path="/MLake" render={(props)=> <Local {...props} local='MLake' />}/>
        
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
