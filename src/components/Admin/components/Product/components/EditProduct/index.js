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
    setProduct({ ...product, id: productToEdit.id });
    setProduct({ ...product, name: productToEdit.name });
    setProduct({ ...product, price: productToEdit.price });
    setProduct({ ...product, picUrl: productToEdit.picUrl });
  }, [setProduct, product, productToEdit])

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/admin/updateItem`,
      {
        id: product?.id,
        name: product?.name,
        price: product?.price,
        picUrl: product?.picUrl,
      }).then((response) => {
        console.log('Edit response', response)
        if (response.status === 200) {
          alert('Successfully edited');
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