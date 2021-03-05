import React, { useEffect } from 'react';
import { useHistory } from 'react-router'
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';
import { Switch, Route } from "react-router-dom";
import Product from './components/Product';

export default function Admin({ auth }) {

  const history = useHistory();

  useEffect(() => {
    if (auth.authorized !== true) {
      history.push(`/admin/login`)
    }
  }, [auth, history])

  return (
    <div>
      <NewProduct />
      <ProductList />

      <Switch>
        <Route path="/admin/product/:productId">
          <Product
            auth={auth}
          />
        </Route>
      </Switch>
    </div>
  )
}