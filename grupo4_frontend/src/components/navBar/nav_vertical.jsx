import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';




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



  // Función para abrir/cerrar el modal de registro
  const toggle = () => setModal(!modal);

  // Función para abrir/cerrar el modal de inicio de sesión
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  // Lógica para el registro de usuarios
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
        toast.success('Su usuario ha sido creado con éxito!', {
          // Configuración de notificación con la librería react-toastify
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        toggle(); // Cierra el modal de registro
      } else {
        setRegistrationError(true);
      }
    } catch (error) {
      console.error(error);
      setRegistrationError(true);
    }
  };

  // Lógica para el inicio de sesión y cierre de sesión
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
        // Inicio de sesión exitoso
        setIsLoggedIn(true);
        setLoginError(false);
        toggleLoginModal();

        const data = await response.json();

        // Almacena el token en la sesión del navegador
        sessionStorage.setItem("token", JSON.stringify(data.token));

        // Decodifica el token JWT
        var tokenDecodificado = jwt_decode(data.token);
        console.log(tokenDecodificado);
        if (JSON.stringify(tokenDecodificado.rol_id) == 3) {
          localStorage.setItem("admin", true)
          redirect("/panel/users")
          toast.success(`Bienvenido, Administrador!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        if (JSON.stringify(tokenDecodificado.rol_id) == 2) {
          toast.success(`Bienvenido, editor!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          redirect("/admin")
        }
        if (JSON.stringify(tokenDecodificado.rol_id) == 1) {
          toast.success(`BIENVENIDO!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
// Función para cerrar la sesión del usuario
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem("token", false)
    toggleLoginModal();
    toast.info('Nos vemos pronto!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    redirect("/")

  };

  return (
    <nav className="navbar nav col-lg-2 col-md-2 bg-light text-dark sticky-top justify-content-center" style={{ height: '100vh' }}>
      <div className="logo text-center mt-2 py-4 align-self-start border-bottom border-2 border-dark">
        <Link className="nav-link text-dark" to="/Home">
          <h1>NEWS
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
        {!isLoggedIn && (
          <button className="btn btn-primary mb-2" onClick={toggle}>
            Registrarse
          </button>
        )}
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
              <h5 className="modal-title" style={{ color: 'black' }}>Iniciar Sesión</h5>
              <button type="button" className="close" onClick={toggleLoginModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ color: 'black' }}>
              {isLoggedIn ? (
                <p>¿Desea cerrar sesión?</p>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="mail" style={{ color: 'black' }}>Correo electrónico</label>
                    <input
                      type="mail"
                      className="form-control"
                      id="mail"
                      value={mail}
                      onChange={(e) => setmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" style={{ color: 'black' }}>Contraseña</label>
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
              <h5 className="modal-title" style={{ color: 'black' }}>Registro de Usuarios</h5>
              <button type="button" className="close" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name" style={{ color: 'black' }}>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="surname" style={{ color: 'black' }}>Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        id="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" style={{ color: 'black' }}>Correo electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" style={{ color: 'black' }}>Contraseña</label>
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