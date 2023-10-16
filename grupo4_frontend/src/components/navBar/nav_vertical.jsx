import React from "react"
import { Link } from "react-router-dom"

function NavVertical() {
    return (
        <nav className="navbar nav col-2 bg-dark text-white">
            <div className="logo text-center mt-4"><h1>Grupo 4 Blog</h1></div>
            <div className="categorias mt-4 mb-4">
                <a aria-current="page"><Link className="nav-link" to="/"></Link>Home</a>
                <a ><Link className="nav-link" to=""></Link>Sports</a>
                <a ><Link className="nav-link" to=""></Link>Health</a>
                <a ><Link className="nav-link" to=""></Link>Gastronomy</a>
                <a ><Link className="nav-link" to=""></Link>Enterteinment</a>
                <a ><Link className="nav-link" to=""></Link>Economy & Politics</a>
                <a><Link className="nav-link" to=""></Link>Others</a>
            </div>
            <div className="header-buttons text-center">
                <Link className="btn btn-outline-primary" to="/login">Iniciar Sesión</Link>
                <Link className="btn btn-primary" to="/register">Registrarse</Link>
            </div>

        </nav>
    )
}

export default NavVertical