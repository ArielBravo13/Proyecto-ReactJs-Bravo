import { CartWidget }  from '../CartWidget/CartWidget.jsx'
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid container-nav">
                <a className="navbar-brand" href="./index.html">
                    <img className="navbar-logo-img" src="./img/logo.png" alt="Logo"/>
                </a>
                
                <h2>Grabac Store</h2>

                <CartWidget number={0}/>
            </div>
            <div className="navbar-categorias">
                <Categorias />
            </div>
        </nav>
    )
};

const Categorias = () => {
    return (
        <ul>
            <li className='categoria-item'><a href="#">Werable</a></li>
            <li className='categoria-item'><a href="#">Accesorios</a></li>
            <li className='categoria-item'><a href="#">Decoracion</a></li>            
        </ul>
    )
};

/*
<nav class="navbar">
    <div class="container-fluid container-nav">
        <a class="navbar-brand" href="./index.html">
            <img class="navbar-logo-img" src="./assets/img/logo.png" alt="">
        </a>
                
        <h2>Grabac Store</h2>
        
        ->cart widget
        <button class="btn btn-primary cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle" style="display: none;">0</span>
        </button>

    </div>


    ->  item list container
    <div class="navbar-categorias">
        <ul>
            <li>remeras</li>
            <li>vasos</li>
            <li>sticker</li>            
        </ul>
    </div>
</nav>
*/
