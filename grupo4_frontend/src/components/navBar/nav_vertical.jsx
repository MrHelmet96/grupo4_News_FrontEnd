import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavVertical() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/security/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setLoginError(false);
        toggleLoginModal();
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar nav col-lg-2 col-md-2 bg-dark text-white">
      <div className="logo text-center mt-4">
        <Link className="nav-link" to="/">
          <h1>Grupo 4 Blog</h1>
        </Link>
      </div>
      <div className="categorias mt-4 mb-4">
        {/* Contenido de las categorías */}
      </div>
      <div className="d-flex flex-column justify-content-center">
        <button className="btn btn-outline-primary mb-2" onClick={toggleLoginModal}>
          {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
        <Link className="btn btn-primary mb-2" to="/register">
          Registrarse
        </Link>
      </div>

      {/* Modal de Inicio de Sesión */}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showLoginModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{color:'black'}}>Iniciar Sesión</h5>
              <button type="button" className="close" onClick={toggleLoginModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {isLoggedIn ? (
                <p>¡Bienvenido!</p>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="email" style={{color:'black'}}>Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password"style={{color:'black'}}>Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {loginError && (
                    <div className="alert alert-danger">Credenciales inválidas, intente nuevamente</div>
                  )}
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleLoginModal}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={isLoggedIn ? handleLogout : handleLogin}>
                {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del Modal de Inicio de Sesión */}
    </nav>
  );
}

export default NavVertical;


// import React from "react"
// import { Link } from "react-router-dom"

// function NavVertical() {
//     return (
//         <nav className="navbar nav col-lg-2 col-md-2 bg-dark text-white">
//             <div className="logo text-center mt-4"><Link className="nav-link" to="/"><h1>Grupo 4 Blog</h1></Link></div>
//             <div className="categorias mt-4 mb-4">
//                 {/* <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/sports">Sports</Link>
//                 <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/health">Health</Link>
//                 <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/gastronomy">Gastronomy</Link>
//                 <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="/category/">Enterteinment</Link>
//                 <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="">Economy & Politics</Link>
//                 <Link className=" border-top border-bottom border-1 border-light m-1 nav-link" to="">Others</Link> */}
//             </div>
//             <div className="d-flex flex-column justify-content-center">
//                 <Link className="btn btn-outline-primary mb-2" to="/login">Iniciar Sesión</Link>
//                 <Link className="btn btn-primary mb-2" to="/register">Registrarse</Link>
                
//             </div>

//         </nav>
//     )
// }

// export default NavVertical