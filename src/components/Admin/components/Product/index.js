import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router'
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function Product({ auth }) {
  const styles = useStyles();

  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/admin`)
  }

  // set equal to axios response data
  const product = {
    id: useParams().productId,
    name: 'Shirt',
    price: '$9.99',
    pictureName: 'shirt.jpg'
  };

  useEffect(() => {
    if (auth.authorized !== true) {
      history.push(`/admin/login`)
    }
    // Axios, get product
    /*
      axios.post(`http://localhost:8080/product/get`,
        {
          id: useParams().productId
        }).then((response) => {
          console.log('Login response', response)
          if (response.status === 200) {
            alert('Product Creation was successful');
          }
      });
      */
  }, [auth, history])

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