import React, { Component } from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';

import './estilos/Menu.css'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {newItemPanel: false};//creamos esta variable para que el panel este oculto cuando sea falso

    this.add = this.add.bind(this);//tenemos que bindear el alcance de nuestro metodo con nuestra clase
    this.onCancel = this.onCancel.bind(this);
  }

  add() {//funcion para agregar un panel cuando tocamos el boton, la variable newItemPanel pasaria a ser verdadera cuando tocamos el boton
    this.setState({newItemPanel: true});
  }

  onCancel() {//modificar el estado para que sea falso y no se muestre el panel cuando cancelamos
    this.setState({newItemPanel: false});
  }

  render () {
    return (
      <div className = 'container'>
        <div className = 'subcontainer'>
          <div className = 'logo'>
            {this.props.title}
          </div>
          <div className = 'search'>
            <Search onsearch={this.props.onsearch}/>
          </div>
          <div className = 'actions'>
            <button onClick={this.add} className='button btn-blue'>+ Añadir nuevo libro</button>
          </div> {/*condicionamos al boton con una propiedad unClick que va a ejecutar una función*/}
        </div>
        {
          (this.state.newItemPanel)?//esto es una condicional//if condensado
            <PanelAdd onadd={this.props.onadd} oncancel={this.onCancel}/>//Acá llega el oncancel desde PanelAdd.js y este manda a llamar a la función onCancel que a su vez cambia el estado del panel a FALSE
            ://si es verdadero muestra el panel
            ''//Como los datos no se actualizan en menu en onadd mandamos a llamar al siguiente prop dentro de Libreria.js
        }
      </div>
    );
  }
}

export default Menu