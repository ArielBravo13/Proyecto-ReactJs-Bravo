import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {    
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt= {`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <h5 className="card-title">{item.marca}</h5>
                <h5 className="card-title">precio : ${item.precio}</h5>
                <h5 className="card-title">stock disponible: {item.stock}</h5>
                <Link className='nav-link' to={`/product/${item.id}`}><button className='btn btn-danger'> Ver Producto </button> </Link>
            </div>
        </div>
    );
}

