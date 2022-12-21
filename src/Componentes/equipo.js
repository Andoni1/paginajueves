import React from "react";
import "./equipo.css";
import goizeder from '../images/goizeder.jpeg';
import asier from '../images/asier.jpeg';
import andoni from '../images/andoni.jpeg';


class Equipo extends React.Component {
    render(){
        return (
            <section class="testimonials text-center bg-light">
                <div class="container">
                    <h2 class="mb-5">Equipo</h2>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img class="img-fluid rounded-circle mb-3" src={goizeder} alt="..." />
                                <h5>Goizeder</h5>
                                <p class="font-weight-light mb-0">Informacion 1</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img class="img-fluid rounded-circle mb-3" src={asier} alt="..." />
                                <h5>Asier</h5>
                                <p class="font-weight-light mb-0">Informacion 2</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img class="img-fluid rounded-circle mb-3" src={andoni} alt="..." />
                                <h5>Andoni</h5>
                                <p class="font-weight-light mb-0">Informacion 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Equipo;