import React from "react";
import despensa from "../../images/despensa.jpeg";
import usuario from "../../images/frigo.jpeg";
import frigo from "../../images/usuarios.jpeg";
import despensa2 from "../../images/pruebaImg.jpg";

class Carrusel extends React.Component {
    render(){
        return (
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner d-flex flex-direction: column container">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={despensa2} class="d-block w-100 img-fluid imgCar" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-white">First slide label</h5>
                  <p class="text-white">Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={frigo} class="d-block w-100 img-fluid" alt="..."/>
                <div class="carousel-caption d-none d-md-block" >
                  <h5 class="text-white" >Second slide label</h5>
                  <p class="text-white">Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={usuario} class="d-block w-100 img-fluid" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        );
    }

}

export default Carrusel;