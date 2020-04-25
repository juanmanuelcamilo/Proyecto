import React, { Component } from 'react';
import './estilos/Item.css'
//En Item vamos a renderizar todo lo relacionado con el HTML de los libros, es dónde se va a
//representar la información.
class Item extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      rating: 1,
      stars: []//creo la función de DidMount porque lo que esta dentro del state es de solo lectura
    };
  }

  componentDidMount() {//funcion para modificar el estado cuando se carga el DOM
    this.setState ({
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      rating: parseInt(this.props.rating),
      stars: Array(parseInt(this.props.rating)).fill(0)//si tiene rating 4, voy a crear un arreglo de 4 espacios llenados con el valor de 0
    })
  }

  onChangeRating = e => {
    const rating = parseInt(e.target.value)//Extraigo el valor del rating

    this.setState({//Actualizamos el estado del rating
      rating: parseInt(e.target.value),
      stars: Array(parseInt(e.target.value)).fill(0)
    });
    this.props.onupdaterating({id: this.state.id, title: this.state.title, image: this.state.image, rating: rating})
    //Llamamos a los props de nuestro padre, List.js y le mandamos ese array
  }

  onremove = e => {
    this.props.onremove(this.props.id)
  }//Mando a llamar a la funcion on remove, solo necesitamos el id

  render() {//html que vamos a utilizar para renderizar nuestros elementos, aca utilizo las props
    return ( //que estoy mandando desde list
      // usar clase style     border-bottom: 1px solid green;
      <div className='item'>
        <div className='image'><img src={'../img/' + this.state.image} width='100%' alt='nada'/></div>
        <div className='title'>{this.state.title}</div>
        <div className='rating'>
          <p>
            {//Iteracion de las estrellas
              this.state.stars.map(x =>
                <img src='../img/star.png' width='32' alt='nada '/>
              )//mappeo los espacios para que me cree una estrella por cada uno de estos
            }
          </p>
          {/*Preguntar a Baut= correr calific, boton borra mal, desaliñado*/}
          Calificación: 
          <select value={this.state.rating} onChange={this.onChangeRating}>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>
          </select>
        </div>
        <div className = 'actions'>
          <button className='correrBoton' onClick={this.onremove}>Eliminar</button>
        </div>
      </div>
    );
  }
}

export default Item