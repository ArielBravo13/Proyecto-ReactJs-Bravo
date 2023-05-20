import React from 'react';
import { Categorias } from '../Categorias/Categorias.jsx';
import { CartWidget } from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid container-nav justify-content-around">
                <a className="navbar-brand" href="./index.html">
                <i className="fa-solid fa-cart-shopping"></i>
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
