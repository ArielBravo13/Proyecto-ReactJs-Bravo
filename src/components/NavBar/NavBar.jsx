import React from 'react';
import { Categorias } from '../Categorias/Categorias.jsx';
import { CartWidget } from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid container-nav">
                <a className="navbar-brand" href="./index.html">
                    <img className="navbar-logo-img" src="./img/logo.png" alt="Logo" />
                </a>

                <h2>Ariel Store</h2>

                <CartWidget number={0}/>

            </div>
            <div className="navbar-categorias">
                <Categorias />
            </div>
        </nav>
    );
}

export default NavBar;
