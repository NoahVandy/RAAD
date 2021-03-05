import React from 'react';
import '../../../../../../App.css';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    height: 32
  },
  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function DeleteProductView({
  state,
  handleSubmit,
  handleNavigate
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <Typography variant="h5" className={styles.title}>
        Product Deletion
      </Typography>
      <Typography variant="h6" className={styles.title}>
        Are you sure you want to delete the product, "{state.name}"?
      </Typography>
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
  );
}
