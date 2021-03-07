import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import ProductListView from './view';
import axios from 'axios';

export default function ProductList() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Get All Products')
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
  }, [history])

  const handleListItemClick = (event, productId) => {
    console.log('Selected Product with id', productId)
    history.push(`/admin/product/${productId}`)
  };

  return (
    <ProductListView
      products={products}
      handleListItemClick={handleListItemClick}
    />
  );
}