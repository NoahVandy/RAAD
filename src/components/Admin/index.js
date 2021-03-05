import React, { useEffect } from 'react';
import { useHistory } from 'react-router'
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';
import { Switch, Route } from "react-router-dom";
import Product from './components/Product';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function Admin({ auth }) {
  const styles = useStyles();

  const history = useHistory();

  useEffect(() => {
    if (auth.authorized !== true) {
      history.push(`/admin/login`)
    }
  }, [auth, history])

  const handleSubmit = () => {
    history.push(`/admin/login`)
  }

  return (
    <div>
      <Button
        onClick={handleSubmit}
        className={styles.button}
        variant="contained"
      >
        Log out
      </Button>
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