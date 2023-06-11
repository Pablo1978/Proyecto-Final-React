import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgcarrito = "https://img.freepik.com/vector-premium/icono-carrito-compras-rapido_414847-513.jpg?w=2000"

  return (
    <Link to='/cart'>
      <img className='imgcarrito' src={imgcarrito} alt="Carrito" />
      {
        cantidadTotal > 0 && <span className="itemsIndicador"> {cantidadTotal} </span>
      }
    </Link>
  )
}

export default CartWidget
