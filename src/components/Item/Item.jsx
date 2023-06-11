import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, }) => {
  return (
    <div className='cardProductos'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h3>{nombre} </h3>
      <p>$ {precio} </p>
      <p>{id} </p>

      <Link to={`/item/${id}`} className="botonDetalle"> Ver Detalles </Link>

    </div>
  )
}

export default Item
