import React, { useState } from 'react';
import ShopItemView from './view';

export default function ShopItem({ product }) {
  const [open, setOpen] = useState(false);

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