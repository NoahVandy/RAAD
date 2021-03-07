import React, { useState, useEffect } from 'react';
import EditProductView from './view';
import axios from 'axios'

export default function EditProduct({ product, setProduct }) {

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    // Axios, edit product

    const apiProduct = {
      name: product.name,
      price: product.price,
      picUrl: product.picUrl,
      id: product.id
    }

    console.log("apiProduct", apiProduct);

    axios.post(`http://localhost:3001/admin/updateItem`,
    {
      product: apiProduct
    }).then((response) => {
      console.log('Edit response', response)
      if (response.status === 200) {
        alert('Successfully edited');
      }
      else if (response.status === 501) {
        alert('price is not a num')
      }
    })
  }

  return (
    <EditProductView
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}