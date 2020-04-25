import React, {Component} from 'react';
import Header from './Header';//Subcomponente dentro del componente
import Tablero from './Tablero'//Subcomponente dentro del componente
import construirBaraja from './utilidades/construirBaraja'//Nos va a proporcionar una baraja nueva
//El componente JuegoDeMemoria es el que engloba todos los demas componentes
import './Juego.css';

import 'font-awesome/css/font-awesome.css'//Librería de íconos

const getEstadoInicial = () => {
  const baraja = construirBaraja();//Generamos la baraja
  return {//Retorno un objeto
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,//Cuando el usuario elija una carta va a cambiar a V mientras la aplicacion calcula si las 2 cartas son iguales
    numeroDeIntentos: 0
  };
}

class JuegoDeMemoria extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  render () {
    return (
      <div className = 'Memoria'>
        <Header
          numeroDeIntentos={this.state.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
        />
        <Tablero
          baraja = {this.state.baraja}
          parejaSeleccionada = {this.state.parejaSeleccionada}
          seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta(carta) {//Agregamos un gate(puerta) para retornar en caso de que el usuario no pueda seleccionar carta
    if (//Condiciones en la cual el usuario no deberia poder seleccionar cartas
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||//Si el usuario ya eligió esta carta(si ya está en el array de cartas seleccionadas)
      carta.fueAdivinada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];//Estamos creando un nuevo array con la carta que ya estaba en el estado y le agregamos una nueva(si no tenia cartas, solamente quedara la carta que esta entrando nueva)
    this.setState({//Actualizamos el estado
      parejaSeleccionada
    });
    
    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});//Para que el usuario no pueda seguir girando cartas hasta que termine la comparacion

    setTimeout(() => {//Hace un delay en la ejecucion de una funcion
      const [primeraCarta, segundaCarta] = parejaSeleccionada;//Destructuracion del array pareja seleccionada
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {//Si adivino la pareja
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {//Si no adivino la pareja
            return carta;
          }

          return {...carta, fueAdivinada: true};//...carta(Agarra la carta, expande sus propiedades y cambia o agrega la propiedad fueAdivinada a true)
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({//Cambiamos el estado
        parejaSeleccionada: [],//Vacamos el array de pareja seleccionada
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0//Si la cantidad de cartas que no han sido adivinadas es === 0, el usuario ganó
    ) {
      alert(`Ganaste en ${this.state.numeroDeIntentos} intentos!`);
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial()
    );
  }
}


export default JuegoDeMemoria;