import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import EditProductView from './view';
import axios from 'axios'

export default function EditProduct({ product, setProduct }) {
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    const apiProduct = {
      name: product.name,
      price: product.price,
      picUrl: product.picUrl,
      id: product.id
    }

    console.log("apiProduct", apiProduct);

    axios.post(`http://localhost:3001/admin/updateItem`,
      {
        product: product
      }).then((response) => {
        console.log('Edit response', response)
        if (response.status === 200) {
          history.push(`/admin`)
        }
        else if (response.status === 501) {
          alert('Product edit failed: Price must be a number')
        }
        else {
          alert('Product edit failed');
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