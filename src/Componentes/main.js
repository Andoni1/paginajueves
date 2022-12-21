import React from "react";
import "../estiloImgTexto.css";
import Carrusel from "./elementos/carrusel";
import FormularioContacto from "./elementos/formulario";
import Planes from "./elementos/planes";
import Equipo from "./equipo";

class Main extends React.Component {
  render() {
    return (
        <div class="container">
            <Carrusel />

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
            <div class="d-flex">
              <div class="">
                  <h2>Sobre Nosotros</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repellat voluptate ipsum! Similique dolorum officia eum vero, voluptatem mollitia rerum est debitis, temporibus perspiciatis labore modi nemo?</p>
                <Equipo />
              </div>
            </div>

            <div class="mt-5" > 
              <h2>Contacto</h2>
              <FormularioContacto />
            </div>

        </div>
    );
  }
}

export default Main;
