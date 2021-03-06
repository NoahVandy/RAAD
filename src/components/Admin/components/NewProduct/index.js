import React, { useState } from 'react';
import NewProductView from './view';
import axios from 'axios'

export default function NewProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    picUrl: ''
  });

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Create Product')
    // Axios, create product
    axios.post(`http://localhost:3001/admin/createItem`,
      {
        name: product.name,
        price: product.price,
        picUrl: product.picUrl
      }).then((response) => {
        console.log('Login response', response)
        if (response.status === 200) {
          alert('Product Creation was successful');
          setProduct({ ...product, name: '' });
          setProduct({ ...product, price: '' });
          setProduct({ ...product, picUrl: '' });
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