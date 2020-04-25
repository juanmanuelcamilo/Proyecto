import React, { Component } from 'react';
import './estilos/App.css';

import Menu from './Menu';
import List from './List';

class Libreria extends Component {

  constructor(props) {//lo que esta en el constructor es solo de lectura
    super(props);
    this.state = {
      books: [//Este arreglo solo lo usamos para agregar o quitar elementos
        {id:0, rating:4, title: 'Harry Potter', image: 'libro01.jpg'},
        {id:1, rating:3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating:5, title: 'Código Da Vinci', image: 'libro03.jpg'},
        {id:3, rating:5, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating:5, title: 'Sobrenatural', image: 'libro05.jpg'},
      ],
      copyBooks: []//Este arreglo lo usamos para hacer la busqueda de los libros
    };
  }

  initBooks = () => {//Funcion que va a contener el arreglo de los libros originales
    this.setState((state, props) => ({
      copyBooks: [...state.books]//copybooks es el que vamos a modificar
    }));
  }

  componentDidMount() {//Ejecutamos la funcion  que va a llamar a otra funcion cuando se cargue el DOM
    this.initBooks();
  }

  onAdd = (item) => {//Aca voy a recibir toda la información que proviene de PanelAdd
    let temp = [...this.state.books];//copiamos los props/mi arreglo de books con los ...
    const id = temp[temp.length - 1].id + 1;
    //Sacamos el último id de mi arreglo. Le restamos 1 porque los arrays empiezan en 0. Sumamos 1 para asignarle ese id al nuevo libro
    item['id'] = id;
    //A mi nuevo item, le voy a agregar la propiedad de ID y le voy a asignar el valor de la const de arriba
    temp.push(item)
    //Luego hacemos un push de temp para insertar todo el elemento en mi arreglo temporal de item

    this.setState({books: [...temp]})
    //Por último nos hace falta regresarlo al state haciendo una copia de temp
    this.initBooks();//Contiene solo los 5 libros
  }

  onSearch = (query) => {//query es como una keyword, pero abarca una cantidad de palabras mas amplia
    if(query === '') {//si el buscador esta vacío, se muestran todos los libros (initBooks)
      // this.setState({copyBooks: [...this.state.books]});
      this.initBooks();//es lo mismo esto que lo de arriba
    } else {//si contiene texto, creamos un arreglo temporal de mis libros
      const temp = [...this.state.books];//arreglo temporal
      let res = [];//lo que voy a devolver

      temp.forEach(item => {//recorremos cada elemento de temp con un forEach
        if (item.title.toLowerCase().indexOf(query) > -1) {//indexOf nos indica la ubicacion de una letra(comienza desde 0)
          res.push(item);//Pusheo el resultado a let res haciendo una copia e este
        }
      });
      this.setState({copyBooks: [...res]});//Actualizo el estado de copyBooks 
    }
  }

  onRemove = (id) => {
    var temp = [...this.state.books];
    // eslint-disable-next-line
    const res = temp.filter(item => item.id != id)

    this.setState({books: [...res]});
    this.initBooks();
  }

  onUpdateRating = (item) => {
    var temp = [...this.state.books]
    const index = temp.findIndex(x => x.id === item.id)
    //findIndex devuelve el indice del primer elemento de un array que cumpla con lo que le pedimos 
    //index va a contener el indice para que lo pueda actualizar
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  render () {
    return (
      <div className = 'libreria'>
        <Menu
          title='Mundo Libros'
          onadd={this.onAdd}
          onsearch={this.onSearch}
        />
        <List 
          items={this.state.copyBooks}//Así le mando mi arreglo de datos como una propiedad al componente List
          onupdaterating={this.onUpdateRating}
          onremove={this.onRemove}
        />
      </div>
    );
  }
}

export default Libreria