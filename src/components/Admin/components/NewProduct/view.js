import React from 'react';
import '../../../../App.css';
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
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // (4% = footer) + (64px = Search Bar) + (10px = Search Bar margin) + (32px = title) + (40px = margin) + (14px extra)
    height: "calc(96% - 160px)",
    margin: 20
  },
  input: {
    borderBottom: 'solid 1px #e2b060',
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
      color: '#f0ba64',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f0ba64',
    },
  },
  button: {
    marginTop: 10,
    background: '#e2b060',
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
      <div className={styles.form}>
        <Typography variant="h5" className={styles.title}>
          Product Creation
      </Typography>
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
