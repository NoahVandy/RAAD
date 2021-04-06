import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShopItem from './components/ShopItem';

export default function Shop() {

  const [products, setProducts] = useState();

  useEffect(() => {
    console.log('Get All Products')
    axios.get(`http://localhost:3001/admin/getItems`).then((response) => {
      console.log('Get response', response)
      if (response.status === 200) {
        setProducts(response.data);
      }
      else {
        alert('Retreiving all products failed');
      }
    });
  })

  return (
    <div>
      <div class="row">
        <h3 class="heading-h3 nominate__heading">Shop</h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "50px", gridRowGap: "50px", marginLeft: "200px" }}>
        {products?.map((product, idx) => (
          <ShopItem
            key={idx}
            product={product}
            style={{flex: "1 1 160px" }}
          />
        ))}
      </div>
    </div>
  )
}