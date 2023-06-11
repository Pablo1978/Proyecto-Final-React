import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgAcuario = "./img/logo.webp"
    return (
        <header>
            <Link to={"/"}>
                <img className="imgAcuario" src={imgAcuario} alt='Logo Acuario' />
            </Link>

            <ul>
                <li>
                    <NavLink activeClassName="active" to={`/categoria/1`}> Aireadores </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to={`/categoria/2`}> Pecera </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to={`/categoria/3`}> Filtros </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to={`/categoria/4`}> Piedras </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to={`/categoria/5`}> Tratamientos Para Peces </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to={`/categoria/6`}> Calentador </NavLink>
                </li>
            </ul>

            <CartWidget />

        </header>
    )
}

export default NavBar
