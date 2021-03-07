import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import ProductListView from './view';
import axios from 'axios';

export default function ProductList({products}) {
  const history = useHistory();

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