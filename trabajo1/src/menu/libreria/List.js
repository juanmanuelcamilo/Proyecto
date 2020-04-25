import React from 'react';
import Item from './Item';
//Acá vamos a recibir los elementos que mandamos desde Libreria.js en el componente List y los
//vamos a mostrar
//Lista en este caso lo usamos para hacer el mapeo o recorrido de cada uno de los elementos.
//Item.js es el que representará la informacion
import './estilos/Item.css'

function List (props) {
  return (
    // col-md-3
    <div className = 'list'>
      {//Abrimos llaves porque JSX es declarativo y necesitamos hacer procedimientos que nos regresen un valor
        props.items.map(item => //función de mappeo
          <Item //Estoy pasando las props a otro componente
            keys = {item.id}//necesitamos estea prop expecifica para poder identificar a cada elemento, sirve para mappear cada uno de los elementos que tengan su propio ID 
            id = {item.id}
            title = {item.title}
            image = {item.image}
            rating = {item.rating}
            
            onupdaterating = {props.onupdaterating}//Llamamos este evento que esta en el padre, Libreria.js
            onremove = {props.onremove}
          />
        )
      }
    </div>
  );
}

export default List