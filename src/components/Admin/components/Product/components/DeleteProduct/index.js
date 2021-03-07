import React, { useState } from 'react';
import DeleteProductView from './view';
import axios from 'axios';

export default function DeleteProduct({ product, setProducts }) {

  const handleSubmit = () => {
    console.log('Delete Product', product)
    axios.post(`http://localhost:3001/admin/deleteItem`,
      {
        id: product?.id,
      }).then((response) => {
        console.log('Delete response', response)
        if (response.status === 200) {
          alert('Product deletion was successful');
          axios.get(`http://localhost:3001/admin/getItems`).then((response) => {
          console.log('Get response', response)
          if (response.status === 200) {
            //alert('Retreiving all products was successful');
            setProducts(response.data);
          }
          else{
            alert('Retreiving all products failed');
          }    
        });
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