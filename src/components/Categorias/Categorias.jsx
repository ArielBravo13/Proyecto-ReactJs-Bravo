import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-home fa-lg"> Home</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/Zapatillas'}>
                    <button className="btn btn-secondary">
                        <i class="fa-solid fa-shoe-prints"> Zapatillas</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/Remeras'}>
                    <button className="btn btn-secondary">
                        <i class="fa-solid fa-shirt"> Remeras</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/Camperas'}>
                    <button className="btn btn-secondary">
                        <i class="fa-solid fa-shirt"> Camperas</i>
                    </button>
                </Link>
            </li>
        </ul>
    )
};

export default Categorias
