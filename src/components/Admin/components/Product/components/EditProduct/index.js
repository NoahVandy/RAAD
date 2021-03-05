import React, { useState } from 'react';
import EditProductView from './view';

export default function EditProduct({ product }) {
  const [state, setState] = useState({
    id: product.id,
    name: product.name,
    price: product.price,
    pictureName: product.pictureName
  });

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Edit Product', state)
    // Axios, edit product
    /*axios.post(`http://localhost:8080/product/edit`,
      {
        id: state?.id,
        name: state?.name,
        price: state?.price,
        pictureName: state?.pictureName,
      }).then((response) => {
        console.log('Edit response', response)
        if (response.status === 200) {
          alert('Successfully edited');
        }
      })
    */
  }

  return (
    <EditProductView 
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}