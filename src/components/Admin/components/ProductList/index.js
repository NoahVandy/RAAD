import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import ProductListView from './view';

export default function ProductList() {
  const history = useHistory();

  const [state, setState] = useState({
    products: [
      {
        name: 'testName1',
        price: 'testPrice1',
        pictureName: 'testPictureName1'
      },
      {
        name: 'testName2',
        price: 'testPrice2',
        pictureName: 'testPictureName2'
      },
      {
        name: 'testName3',
        price: 'testPrice3',
        pictureName: 'testPictureName3'
      },
    ]
  });

  useEffect(() => {
    // Axios, get all products
    /*
    axios.get(`http://localhost:3001/product/getAll`).then((response) => {
      setState(response.data[0]);
    });
    */
  }, [])

  const handleListItemClick = (event, productId) => {
    console.log('Selected Product with id', productId)
    history.push(`/admin/product/${productId}`)
  };

  return (
    <ProductListView
      state={state}
      handleListItemClick={handleListItemClick}
    />
  );
}