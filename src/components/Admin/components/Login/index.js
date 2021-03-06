import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

import LoginView from './view';

export default function Login({ setAuth }) {
  const history = useHistory();

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log('Log in User', state)
    // Axios, authenticate user
    axios.post(`http://localhost:3001/admin/login`,
      {
        username: state?.username,
        password: state?.password,
      }).then((response) => {
        console.log('Login response', response)
        if (response.status === 200) {
          setAuth({
            authorized: true,
          });
          history.push(`/admin`)
        }
        else {
          alert('invalid login')
        }
      });
  }

  return (
    <LoginView
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}