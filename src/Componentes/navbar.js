import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand flex-grow-1" href="#">
            MyPantryWeb
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="descripcion">
                  Caracteristicas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="planes">
                  Planes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Iniciar sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
