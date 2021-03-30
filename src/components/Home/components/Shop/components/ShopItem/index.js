import React, { useEffect, useState } from 'react';
import ShopItemView from './view';
import coozie1 from '../../../../../img/coozie_1.JPG';
// import coozie2 from '../../../../../img/coozie_1.JPG';
import mens_black_front from '../../../../../img/mens_black_front.JPG';
import mens_blue_front from '../../../../../img/mens_blue_front.JPG';
import mens_white_front from '../../../../../img/mens_white_front.JPG';
// import coozie1 from '../../../../../img/coozie_1.JPG';
import mens_green_front from '../../../../../img/mens_green_front.JPG'
import womens_black_front from '../../../../../img/womens_black_front.JPG'
import womens_blue_front from '../../../../../img/womens_blue_front.JPG'
import womens_green_front from '../../../../../img/womens_green_front.JPG'

export default function ShopItem({ product }) {
  const [open, setOpen] = useState(false);

  if(product.name === 'Test 1') {
    product.image = coozie1;
  }
  if(product.name === 'Test 2') {
    product.image = mens_black_front;
  }
  if(product.name === 'Test 3') {
    product.image = mens_blue_front;
  }
  if(product.name === 'Test 4') {
    product.image = mens_green_front;
  }
  if(product.name === 'Test 5') {
    product.image = mens_white_front;
  }
  if(product.name === 'Test 6') {
    product.image = womens_black_front;
  }
  if(product.name === 'Test 7') {
    product.image = womens_blue_front;
  }
  if(product.name === 'Test 8') {
    product.image = womens_green_front;
  }


  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickGo = () => {
    window.location.href = 'https://www.facebook.com/TheRaddFoundation/photos/a.1460730577471964/2721430758068600/?type=3&eid=ARDoWIYOX3FCBLOkeu1vBfC-bCmOPgLmPcxsSkwuCqhXa07IpVvgBL4nsgerbZUILOfevrTMYVDV_5ab&__xts__[0]=68.ARBAiTW7HAeIz9o_37Mnsp4Z8UqkiuP4qsUDaVnpxeJDa7qJz8HhPVX1i0TZghuAiGHmK5Fx22au_r1Jcpfojx7ptYQzexi9n3b3fXILDLX2oPZIl8jmcf0J_sV0iSsnuoPyDJP8ompXFzYDwJIcldqmvXzcBdoWjyvOwDTnyVQ1RiqFR9p6ru3cmjgArowldd8bwC7Wi1BRXLrib8qwTEM4J3VoPo7471OgwzqdNXUaj__EQasGkjdzDyYdc0WFww1xkt1ZM_0diznCu6WDiF0I3z_1oH-99GvdNSsPjILa-VcG2VGonrM';
  }

  return (
    <ShopItemView
      product={product}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleClickGo={handleClickGo}
    />
  );
}