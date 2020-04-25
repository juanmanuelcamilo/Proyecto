import React from 'react'

import './headerEstilos.css'

function Header () {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="Icono">
          <img src='../img/icono.jpg' width="30" height="30" class="d-inline-block align-top" alt=""></img>
          {/* <h3 className = 'tituloPortfolio'>Portfolio</h3> */}
          Portfolio
        </a>
      </nav>
    </div>
  )
}

export default Header