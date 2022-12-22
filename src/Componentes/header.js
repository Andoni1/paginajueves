import React from "react";
import logo from '../images/logoMPW.png';
import avatar from '../images/avatar.jpg';

class Header extends React.Component {
    render(){
        return (
            <header className="d-flex p-5 align-items-center justify-content-between d-inline pl-5" id="top" >
                    <div>
                        <img className="circular imgpeq" id="logo" src={logo} alt="Logo" />
                    </div>
                    <div>
                        <h1>MyPantryWeb</h1> 
                    </div>
                    <div>
                        <img src={avatar}  className="rounded-circle shadow-4 imgpeq" alt="Avatar" />
                    </div>
    
            </header>
        );
    }

}

export default Header;