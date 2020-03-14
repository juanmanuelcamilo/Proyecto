import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./homePrincipal/Home";
import SimonDice from "./simon/SimonDice";
import Calculadora from "./calcu/Calculadora";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/homePrincipal/Home">Home</Link>
            </li>
            <li>
              <Link to="/simon/SimonDice">Simón Dice</Link>
            </li>
            <li>
              <Link to="/calcu/Calculadora">Calculadora</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calcu/Calculadora">
            <Calculadora />
          </Route>
          <Route path="/simon/SimonDice">
            <SimonDice />
          </Route>
          <Route path="/homePrincipal/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}