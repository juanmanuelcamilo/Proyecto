import React, {Component} from 'react';

class PanelAdd extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      image: '',
      rating: 1
    };
  }

  onChangeTitle = (e) => {//otra manera de hacer el binding
    this.setState({title: e.target.value});
  }
  onChangeImage = (e) => {
    this.setState({image: e.target.value});
  }
  onChangeRating = (e) => {
    const rating = parseInt(e.target.value);//nos aseguramos de que el valor sea un entero
    this.setState({rating: rating});
  }

  onSubmit = (e) => {
    e.preventDefault();//e simplifica EVENT, el preventDefault cancela la acción del evento
    const title = this.state.title;
    const image = this.state.image;
    const rating = this.state.rating;
    //Mandamos a crear un nuevo elemento dentro de mi arreglo que esta en Libreria.js
    this.props.onadd({title: title, image: image, rating: rating});
    //Llamamos a un prop que va a mandar a llamar una funcion y que le vamos a mandar un objeto de parametro
    this.props.oncancel();
    //Llamamos a un porp que va a mandar a llamar la funcion onCancel
  }

  render(){
    return(
      <div className="new-item-panel-container">
        <div className="new-item-panel">
          <form onSubmit={this.onSubmit}>{/*Con formularios se recomienda usar estados para manejar los cambios */}
            <p>
              <label>Título del libro</label><br />
              <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
            </p>{/*onChange nos permite monitorear cualquier cambio en el valor*/}

            <p>
              <label>Nombre de imagen</label><br />
              <input type="text" name="image" className="input" onChange={this.onChangeImage} />
            </p>

            <p>
              <label>Calificación</label><br />
              <select onChange={this.onChangeRating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>

            <input type="submit" className="button btn-blue" value="Registrar libro" />
            <button className="button btn-normal" onClick={this.props.oncancel}>Cancelar</button>
            {/*A traves de un prop puedo mandar a ejecutar una función, por lo que en este botón voy a 
            mandar a llamar un evento custom que se llama oncancel que luego la llamaremos en 
            el componente PanelAdd que esta dentro de Menu.js*/}
          </form>
        </div>
      </div>
    );
  }
}

export default PanelAdd;