import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


// const BDD = [
//     {
//         "id":"1",
//         "idCategoria": "Zapatillas",
//         "nombre": "CHUKKA LOW SIDESTRIPE BEIGE",
//         "marca" : "VANS" ,
//         "precio" : 45000,
//         "stock" : 4,
//         "img" : "img/zapatillas-vans-chukka-low-sidestripe-beige.jpg"
//     },
//     {
//         "id":"2",
//         "idCategoria": "Zapatillas",
//         "nombre": "ZAHBA BEIGE",
//         "marca" : "VANS" ,
//         "precio" : 55000,
//         "stock" : 7,
//         "img" : "img/zapatillas-vans-zahba-beige.jpg"
//     },
//     {
//         "id":"3",
//         "idCategoria": "Zapatillas",
//         "nombre": "SK8 LOW BLANCO",
//         "marca" : "VANS" ,
//         "precio" : 40000,
//         "stock" : 5,
//         "img" : "img/zapatillas-vans-sk8-low-blanco.jpg"
//     },
//     {
//         "id":"4",
//         "idCategoria": "Remeras",
//         "nombre": "YAPAK AMARILLO",
//         "marca" : "TIWEL" ,
//         "precio" : 15000,
//         "stock" : 25,
//         "img" : "img/manga-corta-tiwel-yapak-amarillo.jpg"
//     },
//     {
//         "id":"5",
//         "idCategoria": "Remeras",
//         "nombre": "BEACH TEE",
//         "marca" : "WEMOTO" ,
//         "precio" : 12000,
//         "stock" : 33,
//         "img" : "img/manga-corta-wemoto-beach-tee-blanco.jpg"
//     },
//     {
//         "id":"6",
//         "idCategoria": "Remeras",
//         "nombre": "SAILING CLUB TEE",
//         "marca" : "WEMOTO" ,
//         "precio" : 13500,
//         "stock" : 12,
//         "img" : "img/manga-corta-wemoto-sailing-club-tee-negro.jpg"
//     },
//     {
//         "id":"7",
//         "idCategoria": "Camperas",
//         "nombre": "UFOLLOW VINTAGE TRACK JACKET MULTICOLOR",
//         "marca" : "GRIMEY" ,
//         "precio" : 85000,
//         "stock" : 6,
//         "img" : "img/chaqueta-de-abrigo-grimey-ufollow-vintage-track-jacket-multicolor.jpg"
//     },
//     {
//         "id":"8",
//         "idCategoria": "Camperas",
//         "nombre": "KEEPER TWO-FER VARSITY JACKET AZUL",
//         "marca" : "PRIMITIVE" ,
//         "precio" : 90000,
//         "stock" : 2,
//         "img" : "img/chaqueta-de-abrigo-primitive-keeper-two-fer-varsity-jacket-azul.jpg"
//     },
//     {
//         "id":"9",
//         "idCategoria": "Camperas",
//         "nombre": "SCALY HOOD",
//         "marca" : "QUICKSILVER" ,
//         "precio" : 82000,
//         "stock" : 8,
//         "img" : "img/chaqueta-de-abrigo-quiksilver-scaly-hood-azul.jpg"
//     }
// ]


const ItemListContainer = () => {

    const [ productos, setProductos] = useState([])
    const {category} = useParams()

   /* useEffect(() => {
        const promesa = () => new Promise((resolve, reject) => {
            if (true) {
                resolve(BDD)
            }
            reject ('El archivo  no fue alcanzado de la forma correcta')
        })

        promesa().then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            setProductos(productosFiltrados)
            // const items = <ItemList productos={productos}/>
            // setProductos(items)
        })
        .catch(error => console.log(error))
    }, []) */

    useEffect(() => {

        if(category) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                setProductos(productosFiltrados)
            })
        } 
        else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0)
                setProductos(productosFiltrados)
            })
        }

    }, [])


    return (
        <div className="row">
          {<ItemList productos={productos}/>}
        </div>
    );
}

export default ItemListContainer;
