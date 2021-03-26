import React from 'react';
import '../../../../../../App.css';
import { makeStyles, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 80,
    marginBottom: 50
  },
  title: {
    height: 32
  },
  button: {
  }
}));

export default function DeleteProductView({
  product,
  handleClickOpen,
  handleClose,
  handleCloseYes,
  open
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <div className={styles.container}>
        <Button onClick={handleClickOpen}>
          Delete Product
        </Button>

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
        >
          <DialogTitle>{`Are you sure you want to delete the product, "${product?.name}"?`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deleting this product is irreversible
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseYes}
              className={styles.button}
            >
              Yes
            </Button>
            <Button
              onClick={handleClose}
              className={styles.button}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
