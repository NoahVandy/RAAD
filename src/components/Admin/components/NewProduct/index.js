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

    const product = {
      name: name,
      price: price,
      picUrl: picUrl
    }

    axios.post(`http://localhost:3001/admin/createItem`,
    {
      product
    }).then((response) => {
      console.log('Login response', response)
      if (response.status === 200) {
        alert('Product Creation was successful');
        setName('')
        setPrice('')
        setPicUrl('')
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