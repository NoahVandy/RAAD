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
        console.log('Delete response', response)
        if (response.status === 200) {
          alert('Product deletion was successful');
        }
        else{
          alert('Product deletion failed');
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