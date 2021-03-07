import React, { useState } from 'react';
import NewProductView from './view';
import { useHistory } from 'react-router'
import axios from 'axios'

export default function NewProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    picUrl: ''
  });

  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Create Product')
    // Axios, create product

    const apiProduct = {...product};
    console.log(apiProduct);

    axios.post(`http://localhost:3001/admin/createItem`,
    {
      product: apiProduct
    }).then((response) => {
      console.log('Login response', response)
      if (response.status === 200) {
        alert('Product Creation was successful');
        setProduct({
          name: '',
          price: '',
          picUrl: ''
        })
        history.push('/admin')
      }
    });
  }

  return (
    <NewProductView
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}