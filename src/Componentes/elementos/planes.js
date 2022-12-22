import React from "react";
import "./planes.css";


class Planes extends React.Component {
    render(){
        return (
            <div class="snip1464 d-flex flex direction:row" >
    
            <div class="plan featured justify-content-space-between">
                <header>
                <h4 class="plan-title">
                    
                    Básico
                </h4>
                <div class="plan-cost"><span class="plan-price">Gratuito</span><span class="plan-type"></span></div>
                </header>
                <ul class="plan-features">
                <li><i class="ion-checkmark"> </i>Agregar Prod.</li>
                <li><i class="ion-checkmark"> </i>Modificar Prod.</li>
                <li><i class="ion-checkmark"> </i>Eliminar Prod.</li>
                <li><i class="ion-checkmark"> </i>50 Prod. Max.</li>
                <li><i class="ion-checkmark"> </i>Publicidad</li>
                </ul>
                <div class="plan-select"><a href="">Selecciona Plan</a></div>
            </div>
            <div class="plan">
                <header>
                <h4 class="plan-title">
                    
                    Ultra
                </h4>
                <div class="plan-cost"><span class="plan-price">3.99€</span><span class="plan-type">/año</span></div>
                </header>
                <ul class="plan-features">
                <li><i class="ion-checkmark"> </i>Agregar Prod.</li>
                <li><i class="ion-checkmark"> </i>Modificar Prod.</li>
                <li><i class="ion-checkmark"> </i>Eliminar Prod.</li>
                <li><i class="ion-checkmark"> </i>Prod. Ilimitados</li>
                <li><i class="ion-checkmark"> </i>Sin Publicidad</li>
                </ul>
                <div class="plan-select"><a href="">Selecciona Plan</a></div>
            </div>
            </div>
        );
    }

}

export default Planes;