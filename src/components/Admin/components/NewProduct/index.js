import React, { useState } from 'react';
import NewProductView from './view';

export default function NewProduct() {
  const [state, setState] = useState({
    name: '',
    price: '',
    pictureName: ''
  });

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Create Product', state)
    // Axios, create product
    /*
      axios.post(`http://localhost:8080/product/post`,
      {
        name: state?.name,
        price: state?.price,
        pictureName: state?.pictureName
      }).then((response) => {
        console.log('Login response', response)
        if (response.status === 200) {
          alert('Product Creation was successful');
        }
      });
    */
  }

  return (
    <NewProductView
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}