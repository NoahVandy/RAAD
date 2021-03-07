import React from 'react';
import '../../../../../../App.css';
import { makeStyles, Typography, Button } from '@material-ui/core';

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
  btnGroup: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    marginTop: 10,
    background: 'white',
    color: '#e2b060'
  }
}));

export default function DeleteProductView({
  product,
  handleSubmit,
  handleNavigate
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <div className={styles.container}>
        <Typography variant="h5" className={styles.title}>
          Product Deletion
        </Typography>
        <Typography variant="h6" className={styles.title}>
          Are you sure you want to delete the product, "{product?.name}"?
        </Typography>
        <div className={styles.btnGroup}>
          <Button
            onClick={handleSubmit}
            className={styles.button}
            variant="contained"
          >
            Yes
          </Button>
          <Button
            onClick={handleNavigate}
            className={styles.button}
            variant="contained"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
