import React from 'react';
import '../../../../../../App.css';
import { makeStyles, Card, CardContent, CardMedia, CardActionArea, IconButton, CardActions, Typography } from '@material-ui/core';
import ZoomOutMapRoundedIcon from '@material-ui/icons/ZoomOutMapRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: '0 5px'
  },
  iconButton: {

  },
  image: {

  },
  enlargedImage: {

  },
  dialog: {
    minHeight: '50vh',
    minWidth: '50vw',
  }
});

export default function ShopItemView({ product, open, handleClickOpen, handleClose, handleClickGo }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            className='image'
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {product.price}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={classes.iconButton}
              onClick={handleClickOpen}>
              <ZoomOutMapRoundedIcon />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              onClick={handleClickGo}>
              <ExitToAppRoundedIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle>{product?.name}</DialogTitle>
        <DialogContent>
          <img
            className='enlargedImage'
            src={product.picUrl}
            alt=""
          />
          <DialogContentText>
            {product?.price}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton
            className={classes.iconButton}
            onClick={handleClose}>
            <CloseRoundedIcon />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            onClick={handleClickGo}>
            <ExitToAppRoundedIcon />
          </IconButton>
        </DialogActions>
      </Dialog>

    </div>
  );
}
