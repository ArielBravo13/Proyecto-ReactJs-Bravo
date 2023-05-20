// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3NNa-EdO5trkzpYnAazU8MZrqegZpl1g",
  authDomain: "proyecto-react-bravo2023.firebaseapp.com",
  projectId: "proyecto-react-bravo2023",
  storageBucket: "proyecto-react-bravo2023.appspot.com",
  messagingSenderId: "723518153304",
  appId: "1:723518153304:web:de28608748cdc38910a02d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const bdd = getFirestore()



export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,            
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}


export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}

//1 o 0
//Tanto Update como Delete no devuelven un estado
 export const updateProduct = async (id, info) => {
     await updateDoc(doc(bdd, "productos", id), info)
 }

 export const deleteProduct = async (id) => {
     await deleteDoc(doc(bdd, "productos", id))
 }

  //CREATE y READ OrdenCompra

 export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
     const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
         cliente: cliente,
         items: carrito,
         precioTotal: precioTotal,
         fecha: fecha
     })
     return ordenCompra
 }

 export const getOrdenCompra = async (id) => {
     const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
     const item = { ...ordenCompra.data(), id: ordenCompra.id }
     return item
 }

 export const deleteOrdenCompra = async (id) => {
     await deleteDoc(doc(bdd, "ordenCompra", id))
 }
