import React, { useState } from 'react';
import DeleteProductView from './view';

export default function DeleteProduct({ product }) {
  const [state, setState] = useState({
    id: product.id,
    name: product.name
  });

  const handleSubmit = () => {
    console.log('Delete Product', state)
    // Axios, delete product
    /*axios.post(`http://localhost:8080/product/remove`,
      {
        id: state?.id,
      }).then((response) => {
        console.log('Edit response', response)
        if (response.status === 200) {
          alert('Successfully edited');
        }
      })
    */
  }
  const handleNavigate = () => {
    // Do nothing for now
    // Return to list of products
  }

  return (
    <DeleteProductView 
      state={state}
      handleSubmit={handleSubmit}
      handleNavigate={handleNavigate}
    />
  )
}