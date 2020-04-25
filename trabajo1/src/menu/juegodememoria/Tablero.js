import React, {Component} from 'react';
import Carta from './Carta'//Componente mas pequeño de nuestro componente que se encuentra dentro del componente tablero
import './Tablero.css'

class Tablero extends Component {
  render () {
    return (
      <div className = 'tablero'>{/*Aca adentro vamos a estar recibiendo las cartas que van a llegar como un array */}
        {
          this.props.baraja.map((carta, index) => {
              const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1//Esta variable va a calcular si la carta que viene del map esta en el array de pareja seleccionada
              return <Carta
                key = {index}
                icono = {carta.icono}
                estaSiendoComparada = {estaSiendoComparada}
                seleccionarCarta = {() => this.props.seleccionarCarta(carta)}
                fueAdivinada = {carta.fueAdivinada}
              />;
            })
        }
      </div>
    );
  }
};

export default Tablero