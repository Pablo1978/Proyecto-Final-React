import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, detalle, stock }) => {
    const [agregarCantidad, setAgrgearCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgrgearCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (

        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: $ {precio} </h3>
            <h3>Id: {id} </h3>
            <h4>Stock: {stock} </h4>
            <p>{detalle}</p>
            <img src={img} alt={nombre} />

            {
                agregarCantidad > 0 ? (<Link className="button" to={"/cart"}> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }

        </div >
    )
}

export default ItemDetail
