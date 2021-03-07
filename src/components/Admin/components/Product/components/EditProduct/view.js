import React from 'react';
import '../../../../../../App.css';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    height: 32,
    color: '#e2b060',
    marginBottom: 20
  },
  form: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
    borderRadius: 10,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // (4% = footer) + (64px = Search Bar) + (10px = Search Bar margin) + (32px = title) + (40px = margin) + (14px extra)
    height: "calc(96% - 160px)",
    marginTop: 80
  },
  input: {
    width: '75%',
    maxWidth: 500,
    minWidth: 100,
    marginBottom: 25,
    overflow: 'hidden',
    color: '#e2b060',
    '& .MuiInputBase-input': {
      color: '#e2b060',
      fontSize: 'calc(5px + 2vmin)',
    },
    '& label': {
      color: '#e2b060',
      fontSize: 'calc(2vmin)',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#e2b060',
    },
    '& label.Mui-focused': {
      color: '#e2b060',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e2b060',
    },
  },
  button: {
    marginTop: 10,
    background: '#e2b060',
    color: 'white'
  }
}));

export default function EditProductView({
  product,
  handleChange,
  handleSubmit
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <div className={styles.form}>
        <Typography variant="h5" className={styles.title}>
          Product Edit
      </Typography>
        <TextField
          id="name"
          label="Name"
          value={product.name}
          onChange={handleChange('name')}
          className={styles.input}
        />
        <TextField
          id="price"
          label="Price"
          value={product.price}
          onChange={handleChange('price')}
          className={styles.input}
        />
        <TextField
          id="picUrl"
          label="Picture Name"
          value={product.picUrl}
          onChange={handleChange('picUrl')}
          className={styles.input}
        />
        <Button
          onClick={handleSubmit}
          className={styles.button}
          variant="contained"
        >
          Submit
        </Button>

      </div>

    </div>
  );
}
