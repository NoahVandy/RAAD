import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router'
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import { makeStyles, Button, Divider } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function Product({ auth, setProducts }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    picUrl: ''
  });

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
    axios.get(`https://raad-api.herokuapp.com/admin/getItem/${productId}`,
      {
        id: productId
      }).then((response) => {
        console.log('Login response', response)
        if (response.status === 200) {
          setProduct(response.data[0])
          axios.get(`https://raad-api.herokuapp.com/admin/getItems`).then((response) => {
          console.log('Get response', response)
          if (response.status === 200) {
            setProducts(response.data);
          }
          else{
            alert('Retreiving all products failed');
          }    
        });
        }
      });
  }, [auth, history, productId])

  return (
    <div>
      <Divider/>
      <Button
        onClick={handleSubmit}
        className={styles.button}
      >
        Close
      </Button>
      <EditProduct
        product={product}
        setProduct={setProduct}
      />
      <DeleteProduct
        setProducts={setProducts}
        product={product}
      />
    </div>
  )
}
