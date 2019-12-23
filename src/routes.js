import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddProduct from './pages/addProducts';
import Home from './pages/home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/addproduct' exact component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
}
