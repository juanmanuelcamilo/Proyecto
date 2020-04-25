import React, {Component} from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

export default class Carta extends Component {
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={true}//Desabilitamos que la carta se gire en hoover
        >
          <div className= "portada"></div>{/*Parte de adelante de la carta*/}
          <div className= "contenido">{/*Parte de atras de la carta*/}
            <i className={`fa ${this.props.icono} fa-5x`}></i>{/*Cargamos el icono dentro del div*/}
          </div>
        </ReactCardFlip>
      </div>
    )
  }  
};