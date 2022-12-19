import React from "react";
import "../estiloImgTexto.css";
import Carrusel from "./elementos/carrusel";
import FormularioContacto from "./elementos/formulario";

class Main extends React.Component {
  render() {
    return (
        <div class="container">
            <Carrusel />

            <div > 
              <h2>Caracteristicas</h2>
              <p>Descripcion de la aplicación</p>
            </div>
            <div > 
              <h2>Planes</h2>
              <p>elementos de cada plan dentro de un flex...</p>
            </div>

            <div > 
              <h2>Sobre Nosotros</h2>
            </div>

            <div > 
              <h2>Contacto</h2>
              <FormularioContacto />
            </div>

        </div>
    );
  }
}

export default Main;
