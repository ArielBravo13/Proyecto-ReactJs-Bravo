import { useCarritoContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";


export const CartWidget = () => {

    const { getItemQuantity } = useCarritoContext()

    return (        
        <>
            <button className="btn btn-primary cartWidget" type="button">
                <Link to={'/cart'} className="nav-link">
                <i className="fa-solid fa-cart-shopping"></i>            
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}   
                </Link>
                 
            </button> 
        </>
    )
};