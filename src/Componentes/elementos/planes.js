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
                <li><i class="ion-checkmark"> </i>25GB Linux Web Space</li>
                <li><i class="ion-checkmark"> </i>25 MySQL Databases</li>
                <li><i class="ion-checkmark"> </i>Unlimited Email</li>
                <li><i class="ion-checkmark"> </i>2000Gb mo Transfer</li>
                <li><i class="ion-checkmark"> </i>24/7 Tech Support</li>
                <li><i class="ion-checkmark"> </i>Daily Backups</li>
                </ul>
                <div class="plan-select"><a href="">Select Plan</a></div>
            </div>
            <div class="plan">
                <header>
                <h4 class="plan-title">
                    
                    Ultra
                </h4>
                <div class="plan-cost"><span class="plan-price">3.99€</span><span class="plan-type">/month</span></div>
                </header>
                <ul class="plan-features">
                <li><i class="ion-checkmark"> </i>100GB Linux Web Space</li>
                <li><i class="ion-checkmark"> </i>Unlimited MySQL Databases</li>
                <li><i class="ion-checkmark"> </i>Unlimited Email</li>
                <li><i class="ion-checkmark"> </i>10000Gb mo Transfer</li>
                <li><i class="ion-checkmark"> </i>24/7 Tech Support</li>
                <li><i class="ion-checkmark"> </i>Daily Backups</li>
                </ul>
                <div class="plan-select"><a href="">Select Plan</a></div>
            </div>
            </div>
        );
    }

}

export default Planes;