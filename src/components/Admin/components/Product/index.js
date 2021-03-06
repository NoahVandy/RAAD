import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router'
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import { makeStyles, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function Product({ auth }) {
  const [product, setProduct] = useState();

  const styles = useStyles();

  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/admin`)
  }

  const { productId } = useParams();

  useEffect(() => {
    if (auth.authorized !== true) {
      history.push(`/admin/login`)
    }
    axios.get(`http://localhost:3001/admin/getItem/${productId}`,
      {
        id: productId
      }).then((response) => {
        console.log('Login response', response)
        if (response.status === 200) {
          setProduct(response.data[0])
        }
      });
  }, [auth, history, productId])

  return (
    <div>
      <Button
        onClick={handleSubmit}
        className={styles.button}
        variant="contained"
      >
        Close
      </Button>
      <EditProduct
        product={product}
      />
      <DeleteProduct
        product={product}
      />
    </div>
  )
}