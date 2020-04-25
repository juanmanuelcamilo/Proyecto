import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import QuienSoy from "./sobreMi/QuienSoy";
import Quehaceres from "./quehaceres/Quehaceres";
import JuegoDeMemoria from "./juegodememoria/JuegoDeMemoria";
import Libreria from "./libreria/Libreria";

import './bodyEstilos.css'

export default function App() {
  return (
    <Router>
      <div className = 'Links'>
        <nav>
          <ul>
          <h4 className = 'sobreMi'>Sobre mi:</h4>
            <li>
              <Link to="/sobreMi/QuienSoy" className = 'home'><h5>Quién soy?</h5></Link>
            </li>
            <br/>
            <h4 className = 'proyectoTitulo'>Proyectos personales:</h4>
            <li>
              <Link to="/quehaceres/Quehaceres" className = 'queHaceres'><h5>Quehaceres</h5></Link>
            </li>
            <li>
              <Link to="/juegodememoria/JuegoDeMemoria" className = 'juegoDeMemoria'><h5>Juego de Memoria</h5></Link>
            </li>
            <li>
              <Link to="/libreria/Libreria" className = 'libreria'><h5>Libreria</h5></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sobreMi/QuienSoy">
            <QuienSoy />
          </Route>
          <Route path="/quehaceres/Quehaceres">
            <Quehaceres />
          </Route>
          <Route path="/juegodememoria/JuegoDeMemoria">
            <JuegoDeMemoria />
          </Route>
          <Route path="/libreria/Libreria">
            <Libreria />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}