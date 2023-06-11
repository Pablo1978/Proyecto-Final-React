import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);


    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito </h2>
                <Link className="button" to='/'> Seguir Comprando </Link>
            </>
        )
    }
    return (
        <div className="Cart">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <hr />
            <h3> Cantidad Total: {cantidadTotal} </h3>
            <h3> Total: $ {total} </h3>
            <hr />
            <button className="button" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className="button" to="/checkout"> Finalizar Compra </Link>
            <Link className="button" to='/'> Seguir Comprando </Link>
        </div>
    )
}

export default Cart
