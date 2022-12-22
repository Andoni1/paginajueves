import React from "react";
import "./equipoA.css";
import goizeder from '../images/goizeder.jpeg';
import asier from '../images/asier.jpeg';
import andoni from '../images/andoni.jpeg';


class EquipoA extends React.Component {
    render(){
        return (
            <div className="container d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                <div className="body">
                    <div className="imgContainer">
                    <img src={goizeder}  alt="" class="redondeado" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="box">
                <div className="body">
                    <div className="imgContainer">
                    <img src={asier} alt="" class="redondeado"/>
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="box">
                <div className="body">
                    <div className="imgContainer">
                    <img src={andoni}  alt="" class="redondeado" />
                    </div>
                    <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>


    
        );
    }

}

export default EquipoA;