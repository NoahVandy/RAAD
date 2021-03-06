import React, { useState } from 'react';
import NewProductView from './view';
import { useHistory } from 'react-router'
import axios from 'axios'

export default function NewProduct() {

  const history = useHistory();
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [picUrl, setPicUrl] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    if(event.target.id === 'name') {
      setName(event.target.value);
    }
    else if(event.target.id === 'price') {
      setPrice(event.target.value);
    }
    else if(event.target.id === 'picUrl') {
      setPicUrl(event.target.value);
    }
  };

  const handleSubmit = () => {
    console.log('Create Product')
    // Axios, create product
    axios.post(`http://localhost:3001/admin/createItem`,
    {
      name: name,
      price: price,
      picUrl: picUrl
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
      name={name}
      price={price}
      picUrl={picUrl}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}