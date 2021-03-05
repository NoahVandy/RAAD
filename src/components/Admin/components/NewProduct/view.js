import React from 'react';
import '../../../../App.css';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    height: 32
  },
  form: {
    background: '#b9904e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
    borderRadius: 10,
    width: 'auto',
    // (4% = footer) + (64px = Search Bar) + (10px = Search Bar margin) + (32px = title) + (40px = margin) + (14px extra)
    height: "calc(96% - 160px)",
    margin: 20
  },
  input: {
    width: '75%',
    maxWidth: 500,
    minWidth: 100,
    marginBottom: 25,
    overflow: 'hidden',
    color: 'white',
    '& .MuiInputBase-input': {
      color: 'white',
      fontSize: 'calc(5px + 2vmin)',
    },
    '& label': {
      color: 'white',
      fontSize: 'calc(2vmin)',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& label.Mui-focused': {
      color: 'rgb(214, 214, 214)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(214, 214, 214)',
    },
  },
  button: {
    marginTop: 10,
    background: 'black',
    color: 'white'
  }
}));

export default function NewProductView({
  state,
  handleChange,
  handleSubmit
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <Typography variant="h5" className={styles.title}>
        Product Creation
      </Typography>
      <div className={styles.form}>
        <TextField
          id="name"
          label="Name"
          value={state?.name}
          onChange={handleChange('name')}
          className={styles.input}
        />
        <TextField
          id="price"
          label="Price"
          value={state?.price}
          onChange={handleChange('price')}
          className={styles.input}
        />
        <TextField
          id="pictureName"
          label="Picture Name"
          value={state?.pictureName}
          onChange={handleChange('pictureName')}
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
