import React from 'react';
import '../../../../App.css';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
    height: '100vh'
  },
  loginInput: {
    minWidth: 225,
    '& label.Mui-focused': {
      color: '#e2b060',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& label': {
      color: '#e2b060',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: '#e2b060',
      backgroundColor: 'transparent'
    },
    color: '#e2b060'
  },
  loginTitle: {
    color: '#e2b060'
  },
  button: {
    backgroundColor: '#e2b060',
    color: '#7373AF'
  }
});

export default function LoginView({
  user,
  handleChange,
  handleSubmit
}) {
  const classes = useStyles();

  return (
    <div className="App">
      <header className={classes.container}>
        <Typography variant='h3' className={classes.loginTitle}>
          Admin Login
        </Typography>
        <br />
        <TextField
          id="username"
          label="Username"
          value={user?.username}
          onChange={handleChange('username')}
          className={classes.loginInput}
        />
        <TextField
          id="password"
          label="Password"
          value={user?.password}
          type="password"
          onChange={handleChange('password')}
          className={classes.loginInput}
        />
        <br />
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={classes.button}
        >
          Login
        </Button>
      </header>
    </div>
  );
}
