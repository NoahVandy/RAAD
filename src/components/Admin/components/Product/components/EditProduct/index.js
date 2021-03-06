import React, { useState, useEffect } from 'react';
import EditProductView from './view';
import axios from 'axios'

export default function EditProduct({ product }) {
  console.log(product)

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0.0);
  const [picUrl, setPicUrl] = useState('');

  useEffect (() => {
    setName(product?.name);
    setPrice(product?.price);
    setPicUrl(product?.picUrl);
  }, [product])

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
    // Axios, edit product
    console.log(name);
    console.log(price);
    console.log(picUrl)
    axios.post(`http://localhost:3001/admin/updateItem`,
    {
      id: product?.id,
      name: name,
      price: price,
      picUrl: picUrl,
    }).then((response) => {
      console.log('Edit response', response)
      if (response.status === 200) {
        alert('Successfully edited');
      }
    })
  }

  return (
    <EditProductView 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name}
      price={price}
      picUrl={picUrl}
    />
  )
}