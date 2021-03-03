import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router'

import LoginView from './view';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log("username", username);
    console.log("password", password)
  }

  return (
  <LoginView
    setUsername={setUsername}
    setPassword={setPassword}
    onSubmit={onSubmit}
  />
  )
}