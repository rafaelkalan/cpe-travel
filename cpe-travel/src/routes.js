import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Register} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;