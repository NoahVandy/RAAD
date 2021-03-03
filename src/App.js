import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route path="/adminRADD">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
