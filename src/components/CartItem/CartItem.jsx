import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="CartItem">
      <h3> {item.nombre} </h3>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: $ {item.precio} </p>
      <button className="button" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem
