import React, { useState } from 'react';
import DeleteProductView from './view';
import axios from 'axios';

export default function DeleteProduct({ product }) {

  const handleSubmit = () => {
    console.log('Delete Product', product)
    axios.post(`http://localhost:3001/admin/deleteItem`,
      {
        id: product?.id,
      }).then((response) => {
        console.log('Edit response', response)
        if (response.status === 200) {
          alert('Successfully edited');
        }
      })
  }
  const handleNavigate = () => {
    // Do nothing for now
    // Return to list of products
  }

  return (
    <DeleteProductView
      product={product}
      handleSubmit={handleSubmit}
      handleNavigate={handleNavigate}
    />
  )
}