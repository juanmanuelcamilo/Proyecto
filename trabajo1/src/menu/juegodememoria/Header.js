import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <header>
        <div className = 'titulo'>Juego de Parejas</div>
        <div>
          <button className = 'boton-reiniciar' onClick = {this.props.resetearPartida}>
            Reiniciar
          </button>
        </div>
        <div className = 'titulo'>
          Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  }
};

export default Header;