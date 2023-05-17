import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";


const Cart = () => {

    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                <>
                <h1>Carrito Vacio</h1>
                <button className="btn btn-dark"><Link to="/">Continuar comprando</Link> </button>
                </>
                :
                  <>
                    <div className="container cartContainer">
                        {<ItemList productos={carrito} plantilla={'ItemCart'}/>}
                        <div className="cartButtons">
                            <p>Resumen de la compra : {totalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                            <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link>
                        </div>

                    </div>                                  
                  </>
            }
        </>
    );
}

export default Cart;
