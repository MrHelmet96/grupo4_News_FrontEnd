import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import jwt_decode from 'jwt-decode';




function NavVertical() {
  const redirect = useNavigate();
  
  //hooks de login
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  //

  //hooks de register
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [registrationError, setRegistrationError] = useState(false);
  


  //toggle de Registro
  const toggle = () => setModal(!modal);

  //toggle de Login
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  
 
  // logica de register 

  const handleRegistro = async () => {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          clave,
        }),
      });

      if (response.ok) {
        // Registro exitoso
        alert('Su usuario fue creado con éxito')
        toggle()
        
      } else {
        setRegistrationError(true);
      }
    } catch (error) {
      console.error(error);
      setRegistrationError(true);
    }
  };

  // logica login & logout

  const HandleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/security/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setLoginError(false);
        toggleLoginModal();
        
        const data = await response.json();
        
        sessionStorage.setItem("token", JSON.stringify(data.token))
        alert("¡bienvenido!")
        var tokenDecodificado = jwt_decode(data.token)
        console.log(tokenDecodificado)
          if (JSON.stringify(tokenDecodificado.rol_id)==3){          
            
            redirect("/panel")           
          } 
          if (JSON.stringify(tokenDecodificado.rol_id)==2){          
            
            redirect("/admin")           
          } 
          if (JSON.stringify(tokenDecodificado.rol_id)==1){          
            
            redirect("/home")           
          } 
          
          

      } else {
        setLoginError(true);
       
      }
    } catch (error) {
      console.error(error);
      setLoginError(true);
      sessionStorage.setItem("token", false)
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);    
    sessionStorage.setItem("token", false)
    toggleLoginModal();
    alert("nos vemos pronto")
    redirect("/")
    
  };

  return (
    <nav className="navbar nav col-lg-2 col-md-2 bg-light text-dark sticky-top justify-content-center" style={{height: '100vh'}}>
      <div className="logo text-center mt-2 py-4 align-self-start border-bottom border-2 border-dark">
        <Link className="nav-link text-dark" to="/">
          <h1>Gestión Interna 
                    en   
            Silicon Misiones</h1>
        </Link>
      </div>
      <div className="categorias mt-4 mb-4">
        {/* Contenido de las categorías */}
      </div>
      <div className="d-flex flex-column align-self-end">
        <button className="btn btn-outline-primary mb-2" onClick={toggleLoginModal}>
          {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
        <button className="btn btn-primary mb-2" onClick={toggle}>
          Registrarse
          </button>
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
            <div className="modal-body" style={{color:'black'}}>
              {isLoggedIn ? (
                <p>¿Desea cerrar sesión?</p>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="mail" style={{color:'black'}}>Correo electrónico</label>
                    <input
                      type="mail"
                      className="form-control"
                      id="mail"
                      value={mail}
                      onChange={(e) => setmail(e.target.value)}
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
              <button type="button" className="btn btn-primary" onClick={isLoggedIn ? handleLogout : HandleLogin}>
                {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del Modal de Inicio de Sesión */}

      {/* modal de register */}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{color:'black'}}>Registro de Usuarios</h5>
              <button type="button" className="close" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>                
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name" style={{color:'black'}}>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="surname" style={{color:'black'}}>Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        id="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
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
                      <label htmlFor="password" style={{color:'black'}}>Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="clave"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                      />
                    </div>
                  </form>
                  {registrationError && (
                    <div className="alert alert-danger">
                      Error en el registro, intente nuevamente
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggle}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRegistro}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del Modal register */}      
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