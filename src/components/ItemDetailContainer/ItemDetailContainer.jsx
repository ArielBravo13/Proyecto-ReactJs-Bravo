import React from 'react';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from "../../firebase/firebase"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getProduct()
        .then(productos => {
            const prod = productos.find(prod => prod.id === id)
            setItem(prod)
        })
    }, [id])
 
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
