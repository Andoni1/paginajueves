import React from "react";
import "../estiloImgTexto.css";
import Carrusel from "./elementos/carrusel";
import FormularioContacto from "./elementos/formulario";
import Planes from "./elementos/planes";
import EquipoA from "./equipoA";

class Main extends React.Component {
  render() {
    return (
        <div class="container blanco">
            <div class="mt-5 carusel" >
              <Carrusel />
            </div>
            <div id="descripcion" class="mt-5"> 
              <h2>Caracteristicas</h2>
              <p>Descripcion de la aplicación</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repellat voluptate ipsum! Similique dolorum officia eum vero.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repellat voluptate ipsum! Similique dolorum officia eum vero.</p>
            </div>
            <div id="planes" class="mt-5"> 
              <h2>Planes</h2>
              <Planes />
            </div>
            <div id="nosotros">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repellat voluptate ipsum! Similique dolorum officia eum vero, voluptatem mollitia rerum est debitis, temporibus perspiciatis labore modi nemo?</p>
                <EquipoA /> 

            </div>
            <div class="mt-5" id="contacto"> 
              <h2>Contacto</h2>
              <FormularioContacto />
            </div>
        </div>
    );
  }
}

export default Main;
