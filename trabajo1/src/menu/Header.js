import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Jumbotron } from 'react-bootstrap';
import './headerEstilos.css'
import QuienSoy from "./sobreMi/QuienSoy";
import Quehaceres from "./quehaceres/Quehaceres";
import JuegoDeMemoria from "./juegodememoria/JuegoDeMemoria";
import Libreria from "./libreria/Libreria";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <img src='../img/icono.jpg' width="30" height="30" style={{ marginRight: 50 }} class="d-inline-block align-top" alt=""></img>
        <Navbar.Brand href="#home">Portfolio Juan Manuel Camilo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sobreMi/quienSoy">Sobre mi</Nav.Link>
            <NavDropdown title="Proyectos personales" id="basic-nav-dropdown">
              <NavDropdown.Item href="/quehaceres/Quehaceres">QueHaceres</NavDropdown.Item>
              <NavDropdown.Item href="/juegodememoria/JuegoDeMemoria">Juego de memoria</NavDropdown.Item>
              <NavDropdown.Item href="/libreria/Libreria">Librería</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>


      </Navbar>

      <Jumbotron>
        <Router>

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
        </Router>
      </Jumbotron>

    </div>
  )
}

export default Header