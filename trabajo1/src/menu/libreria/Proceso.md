Definiciones:

-ReactJS: es un framework/ libreria que esta enfocada en crear aplicaciones web y que está basada en
JavaScript

- Algunos principios básicos de React:
  ■Componentes: Es la parte fundamental por la cuál podemos empezar a hacer aplicaciones en React

  La librería de React nos exige/obliga a aprender a operar con componentes que son como ladrillos que se agrupan para crear la aplicación
  
  Ej:
    En html: <img src='logo.png' width='100%' alt='logo oficial'/> -->Esta es una etiqueta con las propiedades src, width y alt.

    En React: <item key='0' id='item-01' title='El Soldado' /> --> Cuando hablamos de componentes, React lo mapea de esa forma y en lugar de propiedades, React los llama porps (key, id, title).

  Props son las propiedades en las cuales nosotros vamos a ingresar datos y que en el fondo vamos a utilizar para poder hacer que este componente funcione.

  Los componentes se tienen que declarar, o sea, especificar que es lo que hacen. Hay 2 formas de declarar funciones:
    1- function Item(props) {
        return(

        )
       }

    2- class Item extends React.Component {   ||Con React.Component le decimos a react que esto es un
         constructor(props) {                 ||componente

         }
         render() {  ||Render es la que se encarga de representar visualmente el componente
           return(

           )
         }
       }

  Cuando declaramos un componente utilizando una función no es necesario usar THIS.nombreDelProp para hacer referencia, solo necesitamos usar PROPS.xxx.
  Por el contrario, cuando me encuentro en un componente declarado a traves de CLASS, si necesito usar THIS para dar a entender que estoy bajo el mismo contexto de toda la clase

  ■JSX: Tiene que ver con cómo armamos nuestros componentes. Es una forma de escribir HTML usando JavaScript ya que React utiliza solo archivos .js. JSX funciona como una forma declarativa pero no de lógica.

  Ej:
    1- return (
         <div className='list'>
           Title: {props.title}
         </div>
       )

    2- return (
         <div className='app'>
           <Menu title='Amozon' />
           <List className='list' />
         </div>
       )

    3- function formatName(user) {                    |||Funcion
         return user.firstName + ' ' + user.lastName;
       }

       const user = {                                 |||Objeto
         firstName:'Juan Manuel'
         lastName:'Camilo'
       }

       const element = (                              |||JSX
         <h1>
           Hola, {formatName(user)}! ||Entre llaves hago referencia a usar notacion JS para llamar la
         </h1>                         función
       )--> Está envuelta en () porque al ser una notacion declarativa, lo que espera como resultado  const element, es el resultado de un componente, por lo que JSX no nos va a servir para hacer flujos sino que solo para hacer statements o declaraciones.

  ■Estado: Como manipulamos la información. React es un framework reactivo, o sea, que a partir del cambio en el estado de los datos, es que la interfaz va a sufrir cambios.

  Ej.(Dentro de un class component)
  constructor(props) {
    super(props);
    this.state = {n: 5} ||this.state es una variable solo de lectura por lo que no se puede modificar
  }

  increase(newValue) {
    this.setState({n: newValue});
  }

  Para poder modificar this.state tenemos que hacer uso de una función que se llama setState(nos permite modificar el estado y los valores para agregar o eliminar elementos)

  Otras funciones importantes para modificar el estado son:
  1-componentDidMount() {
      this.setState({
        Para configurar el estado inicial cuando el componente se agrega al DOM
      })
    }
  2-componentWillUnmount() {
      this.setState({
        Para terminar actividades cuando el componente se elimina del DOM
      })
    }

-e es como se simplifica evento (event) y es el argumento que da el pie a que algo ocurra

Ej:   onChangeTitle = (e) => {//otra manera de hacer el binding
        this.setState({title: e.target.value});
      }
      En este caso, onChangeTitle es el argumento que da el pie para que el setState de title cambie cuando se cambia el título

-Spread Attributes (los ...):

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

Los puntos sirven para pasar todos los props del objeto sin tenes que copiarlos de nuevo, ambas funciones de arriba son equivalentes.