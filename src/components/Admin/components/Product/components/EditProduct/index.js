import React, { useState, useEffect } from 'react';
import EditProductView from './view';
import axios from 'axios'

export default function EditProduct({ productToEdit }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    picUrl: ''
  });

  useEffect(() => {
    setProduct({
      ...product,
      id: productToEdit.id,
      name: productToEdit.name,
      price: productToEdit.price,
      picUrl: productToEdit.picUrl
    });
  }, [setProduct, product, productToEdit])

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    // Axios, edit product
    console.log(name);
    console.log(price);
    console.log(picUrl)

    const apiProduct = {
      name: name,
      price: price,
      picUrl: picUrl,
      id: product.id
    }

    console.log("apiProduct", apiProduct);

    axios.post(`http://localhost:3001/admin/updateItem`,
    {
      product: apiProduct
    }).then((response) => {
      console.log('Edit response', response)
      if (response.status === 200) {
        alert('Successfully edited');
      }
      else if (response.status === 501) {
        alert('price is not a num')
      }
    })
  }

  return (
    <EditProductView
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}