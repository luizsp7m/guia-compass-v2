import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Product from '../views/Product';
import Landing from '../views/Landing';
import Panel from '../views/Panel';

function routes() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Product} path="/product" exact />
        <Route component={Landing} path="/landing" exact />
        <Route component={Panel} path="/panel" exact />
      </Switch>
    </Router>
  );
}

export default routes;