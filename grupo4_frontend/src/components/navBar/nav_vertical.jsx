import React from "react"
import { Link } from "react-router-dom"

function NavVertical() {
    return (
        <nav className="navbar nav col-lg-2 col-md-2 bg-dark text-white">
            <div className="logo text-center mt-4"><Link className="nav-link" to="/"><h1>Grupo 4 Blog</h1></Link></div>
            <div className="categorias mt-4 mb-4">
                {/* <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/sports">Sports</Link>
                <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/health">Health</Link>
                <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/gastronomy">Gastronomy</Link>
                <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/">Enterteinment</Link>
                <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="">Economy & Politics</Link>
                <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="">Others</Link> */}
            </div>
            <div className="d-flex flex-column justify-content-center">
                <Link className="btn btn-outline-primary mb-2" to="/login">Iniciar Sesión</Link>
                <Link className="btn btn-primary mb-2" to="/register">Registrarse</Link>
            </div>

        </nav>
    )
}

export default NavVertical