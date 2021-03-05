import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Admin/components/Login';


function App() {
  const [auth, setAuth] = useState({
    authorized: false
  });

  return (
    <Switch>
      <Route path="/admin/login">
        <Login
          setAuth={setAuth}
        />
      </Route>
      <Route path="/admin">
        <Admin
          auth={auth}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
