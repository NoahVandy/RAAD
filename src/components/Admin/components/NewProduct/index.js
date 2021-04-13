import React, { useState } from 'react';
import NewProductView from './view';
import { useHistory } from 'react-router'
import axios from 'axios'

export default function NewProduct({ setProducts }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    picUrl: ''
  });

  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Create Product')
    // Axios, create product

    const apiProduct = {...product};
    console.log(apiProduct);

    axios.post(`https://raad-api.herokuapp.com/admin/createItem`,
    {
      product: apiProduct
    }).then((response) => {
      console.log('Login response', response)
      if (response.status === 200) {
        setProduct({
          name: '',
          price: '',
          picUrl: ''
        })
        axios.get(`http://localhost:3001/admin/getItems`).then((response) => {
        console.log('Get response', response)
        if (response.status === 200) {
          setProducts(response.data);
        }
        else{
          alert('Retreiving all products failed');
        }    
      });
        history.push('/admin')
      }
    });
  }

  return (
    <NewProductView
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
