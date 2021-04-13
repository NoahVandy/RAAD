import React, { useState } from 'react';
import { useHistory } from 'react-router'
import DeleteProductView from './view';
import axios from 'axios';

export default function DeleteProduct({ product, setProducts }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    console.log('Delete Product', product)
    axios.post(`http://localhost:3001/admin/deleteItem`,
      {
        id: product?.id,
      }).then((response) => {
        console.log('Delete response', response)
        if (response.status === 200) {
          axios.get(`https://raad-api.herokuapp.com/admin/getItems`).then((response) => {
          console.log('Get response', response)
          if (response.status === 200) {
            setProducts(response.data);
          }
          else{
            alert('Retreiving all products failed');
          }    
        });
        }
        else{
          alert('Product deletion failed');
        }
      })
      setOpen(false);
      history.push(`/admin`)
  }

  return (
    <DeleteProductView
      product={product}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleCloseYes={handleCloseYes}
      open={open}
    />
  )
}
