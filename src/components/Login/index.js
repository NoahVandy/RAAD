import React, { useState } from 'react';
//import axios from 'axios';
import { useHistory } from 'react-router'

import LoginView from './view';

export default function Login() {

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log("username", state.username);
    console.log("password", state.password)
  }

  return (
    <LoginView
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}