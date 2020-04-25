import React, {Component} from 'react'
import './QuienSoy.css'

class Home extends Component {
  render () {
    return (
      <div>
        <h1 className = 'tituloQS'>Quién soy?</h1>
        <a className = 'linkedin' href="https://www.linkedin.com/in/juan-manuel-camilo-1213721a2/">LinkedIn</a>
        |
        <a className = 'email' href="mailto:j_m_c_27@hotmail.com">Email</a>
        <p className = 'parrafo'>Me llamo Juan Manuel, tengo 24 años y actualmente estoy estudiando la 
           carrera de Ingeniería Informática. Soy de Junín, Buenos Aires y actualmente vivo aquí, pero
           no tengo problema en moverme a otra ciudad de ser necesario por una oportunidad laboral.
           <br/> 
           Tengo conocimientos en HTML, CSS, JavaScript, Bootstrap, ReactJS, Less y Sass.
           <br/>
           Principalmente estoy interesado en un trabajo de desarrollador front-end u otras tecnologías
           que me permitan entrar al rubro de desarrollo de software.</p>
      </div>
    )
  }
}

export default Home