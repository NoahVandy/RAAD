import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router'
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';
import { Switch, Route } from "react-router-dom";
import Product from './components/Product';
import { makeStyles, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  button: {
    marginTop: 10,
    background: 'white',
    color: '#e2b060'
  }
}));

export default function Admin({ auth }) {
  const styles = useStyles();

  const history = useHistory();

  const [products, setProducts] = useState();

  useEffect(() => {
    if (auth.authorized !== true) {
      history.push(`/admin/login`)
    }
  }, [auth, history])

  useEffect(() => {
    console.log('Get All Products')
    axios.get(`https://raad-api.herokuapp.com/admin/getItems`).then((response) => {
      console.log('Get response', response)
      if (response.status === 200) {
        setProducts(response.data);
      }
      else{
        alert('Retreiving all products failed');
      }    
    });
  }, [history])

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
      <NewProduct 
        setProducts={setProducts}
      />
      <ProductList
        products={products}
      />

      <Switch>
        <Route path="/admin/product/:productId">
          <Product
            setProducts={setProducts}
            auth={auth}
          />
        </Route>
      </Switch>
    </div>
  )
}
